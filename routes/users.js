const express     = require('express');
const expressJWT  = require('express-jwt');
const jwt         = require('jsonwebtoken');
const users       = express.Router();
const bodyParser  = require('body-parser');
const db          = require('../db/pgp.js');
const secret      = 'you wanna hear a secret';


users.route('/')
  .get( (req, res) => {
    res.json( { data: 'success' } )
  })
  .post(db.createUser, ( req, res ) => {
    res.status(201).json( { data: 'success' } );
  });

users.post('/login', db.loginUser, ( req, res ) => {
  var token = jwt.sign( res.rows, secret );

  res.json( { agent: res.rows, token: token } );
})

module.exports = users;
