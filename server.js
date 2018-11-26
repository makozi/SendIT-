//server.js

import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import UserWithJsObject from './src/usingJSObject/controllers/User';
// import UserWithDB from './src/usingDB/controller/User';


import ParcelWithJsObject from './src/usingJSObject/controllers/Parcel';
// import ParcelWithDB from './src/usingDB/controller/Parcel';

dotenv.config();
const User = process.env.TYPE === 'db' ? UserWithDB : UserWithJsObject;


const Parcel = process.env.TYPE === 'db' ? ParcelWithDB : ParcelWithJsObject;


const app= express();

app.use(express.json());
app.get('/',(req,res) => {
    return res.status(200).json({
        status: '200',
        message: 'Wola, Congatulations, Your endpoints are working'
    });
    
    // .send({'message': 'Wola, Congatulations, Your endpoints are working'});
});







// app.post('/api/v1/users', User.create);
// app.get('/api/v1/parcels', User.getAll);
// app.get('/api/v1/parcels/:id', User.getOne);
// app.put('/api/v1/parcels/:id', User.update);
// app.delete('/api/v1/users/:id', User.delete);

// import Parcel from './src/controllers/Parcel';

app.post('/api/v1/parcels', Parcel.create);
app.get('/api/v1/parcels', Parcel.getAll);
app.get('/api/v1/parcels/:id', Parcel.getOne);
app.put('/api/v1/parcels/:id',  Parcel.update);
app.delete('/api/v1/parcels/:id', Parcel.delete);


app.post('/api/v1/users', User.create);
app.get('/api/v1/users', User.getAll);
app.get('/api/v1/users/:id', User.getOne);
app.put('/api/v1/users/:id', User.update);
app.delete('/api/v1/users/:id', User.delete);



app.listen(4000);

console.log('app running on port', 4000);