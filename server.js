//server.js

import express from 'express';

const app= express();

app.use(express.json());
app.get('/',(req,res) => {
    return res.status(200).send({'message': 'Wola, Congatulations, Your endpoints are working'});
});

app.listen(4000);

console.log('app running on port', 4000)