# SendIT-

SendIT is a courier service that helps users deliver parcels to different destinations.

[![Build Status](https://travis-ci.org/makozi/SendIT-.svg?branch=master)](https://travis-ci.org/makozi/SendIT-)
[![Maintainability](https://api.codeclimate.com/v1/badges/63f711c24faa8fad342f/maintainability)](https://codeclimate.com/github/makozi/SendIT-/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/makozi/SendIT-/badge.svg)](https://coveralls.io/github/makozi/SendIT-)








## Getting Started
Instructions to get the project running successfully.

## Prerequisites
You need to have these installed before cloning the project
* NodeJS (At least v8.11.2) - https://nodejs.org/en/download/



## Technologies Used
- [Eslint](https://eslint.org/)
- [Nodejs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Code-Climate](https://codeclimate.com/)
- [Babel](https://babeljs.io/)


## Installation

```bash
git clone https://github.com/makozi/SendIT-.git
```

```bash
cd SendIT-
```

```bash
npm install
```

```bash
npm start
```

## Test

Testing is used at key checkpoints in the overall process to determine whether objectives are being met. It also speed up software development process

## Test Tool
- [Mocha](https://mochajs.org/)


##### Server side tests

```bash
npm run test
```




<h3>ENDPOINTS</h3>
<hr>
<table>
  <tr>
      <th>Request</th>
      <th>End Point</th>
      <th>Action</th>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/parcels</td>
      <td>Create a new contact</td>
  </tr>

  <tr>
      <td>GET</td>
      <td>/api/v1/parcels</td>
      <td>Get all parcels</td>
  </tr>
  <tr>
        <td>GET</td>
        <td>/api/v1/parcels/:id</td>
        <td>Get a parcel by parcelid</td>
  </tr>
   <tr>
      <td>PUT</td>
      <td>/api/v1/parcels/:id</td>
      <td>Update a parcel by parcelid</td>
  </tr>
 
  <tr>
        <td>DELETE</td>
        <td>/api/v1/parcels/:id</td>
        <td>Delete parcel by parcelid</td>
  </tr>
   
  <tr>
        <td>GET</td>
        <td>/api/users/:Id/parcels</td>
        <td>Fetch all orders by a user</td>
  </tr>

   
  
  

</table>
<br>



## Author
[Marizu-Ibewiro Makozi](https://makozi.netlify.com)
