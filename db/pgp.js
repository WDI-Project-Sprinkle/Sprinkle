const bcrypt = require( 'bcrypt' );
const salt   = bcrypt.genSaltSync( 10 );
const pgp    = require( 'pg-promise' )({});

const cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
};

const db = pgp(cn);



function createSecure( email, password, name, callback ) {
  //hashing the password given by the user at signup
  bcrypt.genSalt( function( err, salt ) {
    bcrypt.hash( password, salt, function( err, hash ){
      //this callback saves the user to our databoard
      //with the hashed password
      callback( email, hash, name );
    })
  })
}


// JL create user from form
function createUser( req, res, next ) {
  createSecure( req.body.email, req.body.password, req.body.name, saveUser );

  function saveUser( email, hash, name ) {
    debugger
    db.none( "INSERT INTO users (email, password_digest, name ) VALUES($1, $2, $3) RETURNING *;", [ email, hash, name ] )
    .then(function ( data ) {
      // success;
      console.log( data );
      next();
    })
    .catch( function () {
      // error;
      console.log( 'error signing up' );
    });
  }
}

// JL Login user auth
function loginUser( req, res, next ) {
  const email = req.body.email
  const password = req.body.password

  db.one( "SELECT * FROM users WHERE email LIKE $1;", [ email ] )
    .then( ( data ) => {
      console.log( data )
      if ( bcrypt.compareSync( password, data.password_digest ) ) {
        res.rows = data
        console.log( 'wow you amazing Elton' );
        next()
      } else {
        res.status( 401 ).json( { data:"Fool this no workie" } )
        next()
      }
    })
    .catch( () => {
      console.error( 'error finding users' )
    })
}

// JL login hash
function createHash( email, password, name, callback ) {
  //hashing the password given by the user at signup
  bcrypt.genSalt( function( err, salt ) {
    bcrypt.hash( password, salt, function( err, hash ){
      //this callback saves the user to our databoard
      //with the hashed password
      callback( email, hash, name );
    })
  })
}


// JL add Indeed Jobs to database
function addIneedJobs( req, res, next ){
  const company = req.body.company;
  const job_title = req.body.jobtitle;
  const job_desc = req.body.snippet;
  const city = req.body.city;
  const state = req.body.state;
  const salaries = req.body.salaries;
  const first_added = req.body.date;
  const indeed_job_id = req.body.jobkey;
  const indeed_url = req.body.url;


  db.none( 'INSERT INTO indeed_jobs ( company, job_title, job_desc, city, state, salaries, first_added, indeed_id, indeed_url, indeed) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, false ) RETURNING *', [ company, job_title, job_desc, city, state, salaries, first_added, indeed_id, indeed_url ] )
  .then( ( data ) => {
    res.rows = data;
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
  const job_desc = req.body.ONetFriendlyTitle;
  const city = req.body.City;
  const state = req.body.state;
  const salaries = req.body.Pay;
  const first_added = req.body.PostedDate;
  const career_job_id = req.body.DID;
  const career_url = req.body.CompanyDetilsURL;

  db.none( 'INSERT INTO indeed_jobs ( company, job_title, job_desc, city, state, salaries, first_added, indeed_id, indeed_url, career) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, false ) RETURNING *', [ company, job_title, job_desc, city, state, salaries, first_added, career_id, career_url ] )
  .then( ( data ) => {
    res.rows = data;
    next();
  })
  .catch( ( error ) => {
    console.log( error )
  })
}

function showSavedJobs( req, res, next ){
  db.any( 'SELECT * FROM jobs' )
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
  db.one( 'DELETE FROM apps WHERE user_id = ($1) AND job_id = ($2)' )
  .then( ( data )=>{
    res.rows = data;
    next();
  })
  .catch( ( error )=>{
    console.log( error )
  })
}


module.exports.showSavedJobs = showSavedJobs;
module.exports.deleteSavedJobs = deleteSavedJobs;
module.exports.addCareerJobs = addCareerJobs;
module.exports.addIneedJobs = addIneedJobs;
module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
