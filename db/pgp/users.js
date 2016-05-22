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
    db.one( "INSERT INTO users (email, password_digest, name )\
     VALUES($1, $2, $3) returning email, password_digest;", [email, hash, name])
    .then((data) => {
      res.rows = data;
      next();
    })
    .catch((error) => {
      res.rows = 'error';
      next();
    });
  }
}

function loginUser(req, res, next) {
  db.one('SELECT * FROM users WHERE email LIKE $1;', [req.body.email])
  .then((data) => {
    if (bcrypt.compareSync(req.body.password, data.password_digest)) {
      res.rows = data
      next()
    } else {
      res.rows = 'error';
      next();
    }
  })
  .catch( () => {
    res.rows = 'error';
    next();
  })
}

function updatePassword(req, res, next) {
  db.one('SELECT * FROM users WHERE email LIKE $1;', [req.user.email])
  .then((data) => {
    if (bcrypt.compareSync(req.body.currentPassword, data.password_digest)) {
      createSecure(data.email, req.body.newPassword, data.name, updateUser)
    } else {
      res.rows = 'error';
      next();
    }
    function updateUser(email, hash, name) {
      db.none('UPDATE users SET password_digest=($1) WHERE user_id=($2)',
      [hash, req.user.user_id])
      .then(() => {
        res.rows = 'success';
        next();
      })
      .catch((error) => {
        res.rows = 'error';
        next();
      })
    }
  })
  .catch((error) => {
    res.rows = 'error';
    next();
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

function deleteUser ( req,res,next ) {
  db.none('DELETE FROM users WHERE user_id=($1)', [req.user.user_id])
  .then ( () => {
    next();
  })
  .catch((error) => {
    console.log( error)
  })
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.updatePassword = updatePassword;
module.exports.deleteUser = deleteUser;
