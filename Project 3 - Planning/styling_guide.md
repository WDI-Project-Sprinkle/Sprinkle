## SPRINKLE STYLE GUIDE

#### Git Guide
  * Daily merge and Heroku deployment at 7pm
  * Work on separate branch based on folder/file
  * Branch Naming convention - initial / folderName / fileName
    * jldbpg
  * Never push individual work to Master without group approval


#### ES6 Functions & concatenations
  * use airbnb style guide
  * arrow function
  * spacing between ( ), { }, & [ ]
  * concatenations
  * comments & title everything
  * at least two spacing between each functions
  * Initial on all comments & title
  * comment in fillers
  * use const (var-constant) and let (var-changeable)
  * component breakdown to one individual function
  * utilize helper functions
  * use pg-promise

```javascript

// JL: arrow function
users.route( '/' )
  .get( ( req, res ) => {
    res.json( { data: 'success' } )
  })


// EC: post routes
users.route( '/new' )
  .post(/* db.someDatabase, */ ( req, res ) => {
    res.json( { data: 'success' } )
  })


// VB: concatenations example
const firstName = 'Elton'
const lastName = 'Cheng'
console.log( "Name: ", `${ firstName } ${ lastName }` )
/*
Returns
Name: Elton Cheng
*/


// JL: pg-promise style guide
function loginUser( req, res, next ){
  var email = req.body.email;
  var password = req.body.password;
  db.one( 'SELECT * FROM users WHERE email LIKE ($1);', [ email ] )
    .then( ( data )=>{
      console.log( data )
      if ( bcrypt.compareSync( password, data.password_digest ) ) {
        res.rows = data
        next()
      }
      res.status( 401 ).json( { data: "password and email do not match" } )
        next()
    })
    .catch( ()=>{
      console.error( 'error finding users' )
    })
}
module.exports.createUser = createUser


```
