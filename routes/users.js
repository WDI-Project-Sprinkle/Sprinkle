const express     = require( 'express' );
const expressJWT  = require( 'express-jwt' );
const jwt         = require( 'jsonwebtoken' );
const users       = express.Router();
const db          = require( '../db/pgp/users.js' );
const secret      = process.env.SECRET;

//From Doug
users.use( function( error, request, response, next ) {
 if( error.name === 'UnauthorizredError' ) {
   response.status( 401 ).json( { message: 'you need an authoriation token to view condifential information'} );
 }
});

users.delete('/delete', expressJWT({secret : secret}), db.deleteUser,
(req, res) => {res.send('deads')});

users.put('/update', expressJWT({secret : secret}), db.updatePassword,
(req, res) => {res.send(res.rows)});

users.post('/login', db.loginUser, (req, res) => { // logins
  var token = jwt.sign(res.rows, secret);
  res.json({agent : res.rows, token : token});
});

users.post('/signup', db.createUser, (req, res) => { // creates user
  var token = jwt.sign(res.rows, secret);
  res.json({agent : res.rows, token : token});
});

module.exports = users;
