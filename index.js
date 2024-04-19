const express = require('express');
const cors = require('cors');
const route= require('./routes/test.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', route);

module.exports = app;