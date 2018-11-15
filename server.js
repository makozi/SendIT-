//server.js

import express from 'express';

const app= express();

app.use(express.json());
app.get('/',(req,res) => {
    return res.status(200).send({'message': 'Wola, Congatulations, Your endpoints are working'});
});




import User from './src/controllers/User';

app.post('/api/v1/users', User.create);
app.get('/api/v1/users', User.getAll);
app.get('/api/v1/users/:id', User.getOne);
app.put('/api/v1/users/:id', User.update);
app.delete('/api/v1/users/:id', User.delete);


app.listen(4000);

console.log('app running on port', 4000);