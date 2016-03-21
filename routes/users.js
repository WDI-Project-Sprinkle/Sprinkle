const express     = require( 'express' );
const expressJWT  = require( 'express-jwt' );
const jwt         = require( 'jsonwebtoken' );
const users       = express.Router();
const bodyParser  = require( 'body-parser' );
const db          = require( '../db/pgp.js' );
const secret      = 'you wanna hear a secret';

//From Doug
users.use( function( error, request, response, next ) {
 if( error.name === 'UnauthorizredError' ) {
   response.status( 401 ).json( { message: 'you need an authoriation token to view condifential information'} );
 }
});


users.post( '/login', db.loginUser, ( req, res ) => {
  var token = jwt.sign( res.rows, secret );
  res.json( { agent: res.rows, token: token } );
});


users.delete( '/delete', expressJWT( { secret:secret } ), db.deleteUser, ( req,res ) => {
  res.send( 'deads' );
});


users.put( '/update', expressJWT( { secret:secret } ), db.updatePassword, ( req,res ) => {
  res.send( 'go' )
});


users.route( '/jobs/delete' )
  .delete( expressJWT( { secret:secret } ), db.deleteSavedJobs, ( req, res )=>{
    res.json( res.job_id )
  });


users.route( '/jobs' )
  .get( expressJWT( { secret:secret } ), db.showSavedJobs, ( req, res )=>{
    res.send( res.rows )
  });


users.route( '/IndeedJobs' )
  .post( expressJWT( { secret:secret } ), db.addIndeedJobs, db.userSavedJob, ( req,res ) => {
    res.send( res.rows )
  });


users.route( '/CareerJobs' )
  .post( expressJWT( { secret:secret } ), db.addCareerJobs, db.userSavedJob, ( req,res ) => {
    res.send( res.rows )
  });


users.route( '/' )
  .get( ( req, res ) => {
    res.json( { data: 'success' } )
  })
  .post( db.createUser, ( req, res ) => {
    res.status( 201 ).json( { data: 'success' } );
  });


module.exports = users;
