const bcrypt = require( 'bcrypt' );
const salt   = bcrypt.genSaltSync( 10 );
const pgp    = require( 'pg-promise' )({});

if(process.env.ENVIRONMENT === 'production') {
  var cn = process.env.DATABASE_URL;
} else {
  var cn = {
      host: 'localhost', // server name or IP address;
      port: 5432,
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
  };
}

const db = pgp(cn);

// JL add Indeed Jobs to database
function addIndeedJobs( req, res, next ){
  const company = req.body.company;
  const job_title = req.body.jobtitle;
  const job_desc = req.body.snippet;
  const city = req.body.city;
  const state = req.body.state;
  const salaries = req.body.salaries;
  const first_added = req.body.date;
  const indeed_job_id = req.body.jobkey;
  const indeed_url = req.body.url;


  db.any( 'INSERT INTO jobs ( company, job_title, job_desc, city, state, salaries, first_added, indeed_job_id, indeed_url, indeed) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, false ) RETURNING job_id', [ company, job_title, job_desc, city, state, salaries, first_added, indeed_job_id, indeed_url ] )
  .then( ( data ) => {
    res.rows = data[0].job_id;
    next();
  })
  .catch( ( error ) => {
    console.log( error )
  })
}


// JL add Career Jobs to database
function addCareerJobs( req, res, next ){
  const company = req.body.Company;
  const job_title = req.body.JobTitle;
  const job_desc = req.body.DescriptionTeaser;
  const city = req.body.City;
  const state = req.body.State;
  const salaries = req.body.Pay;
  const first_added = req.body.PostedDate;
  const career_job_id = req.body.DID;
  const career_url = req.body.JobDetailsURL;

  db.any( 'INSERT INTO jobs ( company, job_title, job_desc, city, state, salaries, first_added, career_job_id, career_url, career) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, false ) RETURNING job_id', [ company, job_title, job_desc, city, state, salaries, first_added, career_job_id, career_url ] )
  .then( ( data ) => {
    res.rows = data[0].job_id;
    next();
  })
  .catch( ( error ) => {
    console.log( error )
  })
}


function userSavedJob( req, res, next ) {
  db.none( 'INSERT INTO apps (user_id, job_id, applied) VALUES ($1, $2, false)', [req.user.user_id, res.rows] )
  .then(()=> {
    next()
  })
  .catch( ( error ) => {
    console.log( error )
  })
}


function showSavedJobs( req, res, next ){
  db.any( 'SELECT users.name as user_name, jobs.job_id as job_id, jobs.company as company, jobs.job_title as job_title, jobs.job_desc as job_desc, jobs.indeed as indeed, jobs.indeed_url as indeed_url, jobs.career as career, jobs.career_url as career_url FROM apps FULL OUTER JOIN jobs ON apps.job_id = jobs.job_id LEFT JOIN users ON apps.user_id = users.user_id WHERE apps.user_id = $1', [ req.user.user_id ] )
  .then( ( data )=>{
    res.rows = data;
    next();
  })
  .catch( ( error )=>{
    console.log( error )
  })
}


function showAppliedJobs( req, res, next ){
  db.any( 'SELECT users.name as user_name, jobs.job_id as job_id, jobs.company as company, jobs.job_title as job_title, jobs.job_desc as job_desc, jobs.indeed as indeed, jobs.indeed_url as indeed_url, jobs.career as career, jobs.career_url as career_url FROM apps FULL OUTER JOIN jobs ON apps.job_id = jobs.job_id LEFT JOIN users ON apps.user_id = users.user_id WHERE apps.applied=true AND apps.user_id = $1', [ req.user.user_id ] )
  .then( ( data )=>{
    res.rows = data;
    next();
  })
  .catch( ( error )=>{
    console.log( error )
  })
}


//JL deleteSavedJobs function
function deleteSavedJobs( req, res, next ){
  console.log("This is the user ID:", req.user.user_id, "this is the jobs id: ", req.body.job_id);
  db.one( 'DELETE FROM apps WHERE user_id = ($1) AND job_id = ($2) RETURNING job_id', [ req.user.user_id, req.body.job_id ] )
  .then( (data)=>{
    console.log('DELETED!!')
    res.job_id = data.job_id
    next();
  })
  .catch( ( error )=>{
    console.log( error )
  })
}

function updateSavedJobs( req, res, next ){
  db.one( 'UPDATE apps SET applied=true WHERE user_id=$1', [ req.user.user_id ])
  .then(()=>{
    next()
  })
  .catch( ( error )=>{
    console.log( error )
  })
}

module.exports.showAppliedJobs = showAppliedJobs;
module.exports.updateSavedJobs = updateSavedJobs;
module.exports.userSavedJob = userSavedJob;
module.exports.showSavedJobs = showSavedJobs;
module.exports.deleteSavedJobs = deleteSavedJobs;
module.exports.addCareerJobs = addCareerJobs;
module.exports.addIndeedJobs = addIndeedJobs;
