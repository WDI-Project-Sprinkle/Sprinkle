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


function createUser( req, res, next ) {
  createSecure( req.body.email, req.body.password, req.body.name, saveUser );

  function saveUser( email, hash, name ) {
    debugger
    db.none( "INSERT INTO users (email, password_digest, name) VALUES($1, $2, $3);", [ email, hash, name ] )
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


function addJob( req, res, next ){
  // JL: variables will have to change according to our API request

  const company = req.body.company;
  const job_title = req.body.job_title;
  const job_desc = req.body.job_desc;
  const city = req.body.city;
  const state = req.body.state;
  const salaries = req.body.salaries;
  const first_added = req.body.first_added;
  const indeed_id = req.body.indeed_id;
  const career_id = req.body.career_id;
  const indeed_url = req.body.indeed_url;
  const career_url = req.body.career_url;

  db.none( 'INSERT INTO jobs ( company, job_title, job_desc, city, state, salaries, first_added, indeed_id, career_id, indeed_url, career_url ) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 )', [ company, job_title, job_desc, city, state, salaries, first_added, indeed_id, career_id, indeed_url, career_url ] )
  .then( ( data ) => {
    res.rows = data;
    next();
  })
  .catch( ( error ) => {
    console.log( error )
  })
}

module.exports.addJob = addJob;
module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
