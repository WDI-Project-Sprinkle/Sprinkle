const express     = require('express');
const expressJWT  = require('express-jwt');
const jwt         = require('jsonwebtoken');
const jobs        = express.Router();
const bodyParser  = require('body-parser');
const db          = require('../db/pgp.js');
const secret      = 'you wanna hear a secret';

jobs.use(function(error, request, response, next) {
 if(error.name === 'UnauthorizredError') {
   response.status(401).json({message: 'you need an authoriation token to view condifential information'});
 }
});

jobs.route('/')
  .get( expressJWT( { secret : secret } ), db.getJobs, ( req, res ) => {
    console.log(req, req.agent)
    res.json( res.rows )
  })

// uses.route('/:id')
//   .get( db.showUser, ( req, res ) => {
//     res.send(res.rows)
//   })

module.exports = jobs;
