const bcrypt = require('bcrypt');
const salt   = bcrypt.genSaltSync(10);
const pgp    = require('pg-promise')({});

const cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
};

const db = pgp(cn);

function createSecure(email, password, callback) {
  //hashing the password given by the user at signup
  bcrypt.genSalt(function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      //this callback saves the user to our databoard
      //with the hashed password
      callback(email,hash);
    })
  })
}

function createUser(req, res, next) {
  createSecure(req.body.email, req.body.password, saveUser);

  function saveUser(email, hash) {
    db.none("INSERT INTO users (email, password_digest) VALUES($1, $2);", [email, hash])
    .then(function (data) {
      // success;
      console.log(data);
      next();
    })
    .catch(function () {
      // error;
      console.log('error signing up');
    });
  }
}

function loginUser(req, res, next) {
  var email = req.body.email
  var password = req.body.password

  db.one("SELECT * FROM users WHERE email LIKE $1;", [email])
    .then((data) => {
      console.log(data)
      if (bcrypt.compareSync(password, data.password_digest)) {
        res.rows = data
        console.log('wow you amazing Elton');
        next()
      } else {
        res.status(401).json({data:"Fool this no workie"})
        next()
      }
    })
    .catch(() => {
      console.error('error finding users')
    })
}
// **** added functions getJobs and toggleJobs
function getJobs( req, res, next ) {
  db.any( "SELECT * from jobs ;", [req.agent.user_id])
    .then( function (data) {
      res.rows = data;
      next();
    })
    .catch( function ( error ) {
      console.log( 'Error', error )
    });
}

function toggleJobs( req, res, next ) {
  db.none( `
    UPDATE jobs
    SET completed = NOT completed
    WHERE job_id = ($1);`,
        [ req.params.jobid ]
    )
    .then( ()=> {
      console.log('Toggled Job Successfully');
      next();
    })
    .catch( ( error )=>{
      console.log('Error toggling job')
    })
}

module.exports.toggleJobs = toggleJobs;
module.exports.getJobs = getJobs;
module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
