/**
 * Created by Porter on 1/17/2018.
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const dbController = require('./dbcontroller');

require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.get('/api/shelf/:id', dbController.getBins);
app.get('/api/bin/:id', dbController.getBin);
app.put('/api/bin/:id', dbController.updateBin);
app.delete('/api/bin/:id', dbController.deleteBin);
app.post('/api/bin/:id', dbController.createBin);

app.listen(port, () => console.log(`feeling porty --> ${port}`));