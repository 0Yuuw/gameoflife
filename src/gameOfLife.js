import React, { useState, useEffect } from 'react';
import './style/gol.css'; 

const cellSize = 10; 
const width = window.innerWidth;
const height = window.innerHeight;
const numRows = Math.floor(height / cellSize);
const numCols = Math.floor(width / cellSize);

const generateGrid = () => {
  const grid = [];
  for (let i = 0; i < numRows; i++) {
    grid.push(Array.from(Array(numCols), () => Math.random() > 0.7 ? 1 : 0));
  }
  return grid;
};

const operations = [
  [0, 1], [0, -1], [1, -1],
  [-1, 1], [1, 0], [-1, 0],
  [1, 1], [-1, -1],
];

const GameOfLife = () => {
  const [grid, setGrid] = useState(generateGrid);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((g) => {
        return g.map((row, i) =>
          row.map((cell, j) => {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += g[newI][newJ];
              }
            });

            if (neighbors < 2 || neighbors > 3) return 0;
            if (cell === 1 && (neighbors === 2 || neighbors === 3)) return 1;
            if (cell === 0 && neighbors === 3) return 1;
            return cell;
          })
        );
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, ${cellSize}px)`,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {grid.map((rows, i) =>
        rows.map((col, j) => (
          <div
            key={`${i}-${j}`}
            style={{
              width: cellSize,
              height: cellSize,
              backgroundColor: grid[i][j] ? 'black' : 'white',
            }}
          ></div>
        ))
      )}
    </div>
  );
};

export default GameOfLife;