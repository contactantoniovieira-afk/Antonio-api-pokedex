const express = require('express');

// Appel de la fonction express() pour creer une instance de l'application
// La variable app represente notre serveur web
const app = express();

// Indique sur quel port le serveur doit ecouter les requetes
const port = 3000;

// Definit la route GET '/'
app.get('/', (req, res) => {
  // renvoie une chaine de caracteres au navigateur
  res.send('Hello, Express!');
});