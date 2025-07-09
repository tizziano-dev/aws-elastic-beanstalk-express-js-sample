const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hola Mundo, Tizziano Perea es el Mejor, Desplego usando Beanstalk, CodeBuild y CodePipeline!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
