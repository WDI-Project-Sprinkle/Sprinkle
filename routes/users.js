const express     = require('express');
const expressJWT  = require('express-jwt');
const jwt         = require('jsonwebtoken');
const users       = express.Router();
const bodyParser  = require('body-parser');
const db          = require('../db/pgp.js');
const secret      = 'you wanna hear a secret';

//From Doug
users.use(function(error, request, response, next) {
 if(error.name === 'UnauthorizredError') {
   response.status(401).json({message: 'you need an authoriation token to view condifential information'});
 }
});

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

users.route('/jobs')
  .get(db.showSavedJobs, (req, res)=>{
    res.send(res.rows)
  })

// uses.route('/:id')
//   .get( db.showUser, ( req, res ) => {
//     res.send(res.rows)
//   })

module.exports = users;
