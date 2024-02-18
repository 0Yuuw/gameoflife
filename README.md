# Jeu de la Vie

Le **Jeu de la Vie** est une implémentation du célèbre automate cellulaire conçu par John Horton Conway. Ce projet est réalisé avec React et empaqueté avec Docker pour une distribution facile et rapide.

## Démarrage Rapide

Pour lancer le jeu de la vie localement, assurez-vous d'avoir Docker installé sur votre machine. Suivez ensuite ces étapes :

```bash
# Construire l'image Docker
docker build -t life-game .

# Exécuter le conteneur en mode détaché
docker run -d -p 8080:80 life-game
