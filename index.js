/**
 * Created by Porter on 1/17/2018.
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');

require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.get('/api/shelf/:id', productsController.getAll);
app.get('/api/product/:id', productsController.getOne);
app.put('/api/product/:id', productsController.update);
app.delete('/api/product/:id', productsController.delete);
app.post('/api/product', productsController.create);

app.listen(port, () => console.log(`feeling porty --> ${port}`));