'use strict'
require('dotenv').config();
const express      = require('express');
const expressJWT   = require( 'express-jwt' );
const secret       = process.env.SECRET;
const logger       = require('morgan');
const path         = require('path');
const bodyParser   = require('body-parser');
const app          = express();
const port         = process.env.PORT || 3000;
const userRoutes   = require(path.join( __dirname, '/routes/users'));
const searchRoutes = require(path.join( __dirname, '/routes/search'));
const jobsRoutes = require(path.join( __dirname, '/routes/jobs'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/search', searchRoutes);
app.use('/jobs', expressJWT({secret : secret}), jobsRoutes);
app.get('*', (req, res) => {res.sendFile(path.join(__dirname, 'public/index.html'))})
app.listen(port, () => {console.log('Ayyyeeeeeee Sexyyy Lady! ', port);});
