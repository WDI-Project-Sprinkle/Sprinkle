const express     = require( 'express' );
const expressJWT  = require( 'express-jwt' );
const jwt         = require( 'jsonwebtoken' );
const jobs       = express.Router();
const db          = require( '../db/pgp/jobs.js' );
const secret      = process.env.SECRET;

jobs.route( '/jobs/delete' )
  .delete( expressJWT( { secret:secret } ), db.deleteSavedJobs, ( req, res )=>{
    res.json( res.job_id )
  });


jobs.route( '/jobs' )
  .get( expressJWT( { secret:secret } ), db.showSavedJobs, ( req, res )=>{
    res.send( res.rows )
  });


jobs.route( '/jobsapplied' )
  .get( expressJWT( { secret:secret } ), db.showAppliedJobs, ( req, res )=>{
    res.send( res.rows )
  });


jobs.route( '/IndeedJobs' )
  .post( expressJWT( { secret:secret } ), db.addIndeedJobs, db.userSavedJob, ( req,res ) => {
    res.send( res.rows )
  });


jobs.route( '/CareerJobs' )
  .post( expressJWT( { secret:secret } ), db.addCareerJobs, db.userSavedJob, ( req,res ) => {
    res.send( res.rows )
  });

module.exports = jobs;
