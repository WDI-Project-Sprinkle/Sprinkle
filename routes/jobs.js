const express = require( 'express' );
const jobs    = express.Router();
const db      = require( '../db/pgp/jobs.js' );

jobs.route( '/jobs/delete' )
  .delete(db.deleteSavedJobs, ( req, res )=>{
    res.json( res.job_id )
  });

jobs.route( '/jobs' )
  .get(db.showSavedJobs, ( req, res )=>{
    res.send( res.rows )
  });

jobs.route( '/jobsapplied' )
  .get(db.showAppliedJobs, ( req, res )=>{
    res.send( res.rows )
  });

jobs.route( '/IndeedJobs' )
  .post(db.addIndeedJobs, db.userSavedJob, ( req,res ) => {
    res.send( res.rows )
  });

jobs.route( '/CareerJobs' )
  .post(db.addCareerJobs, db.userSavedJob, ( req,res ) => {
    res.send( res.rows )
  });

module.exports = jobs;
