'use strict'
const React = require( 'react' )
const ReactDOM = require( 'react-dom' )

const Profile = React.createClass({
  render : function(){
    const token = auth.getToken()

    return (
      <div>
        <h1>User Info</h1>
        <p>You did it</p>
      </div>
    )
  }
})

module.exports = Profile;


//inside pgp.js
//inside script.js const Profile = require('./components/profile.js')
//inside nav.js <li><Link to="/:id">Dashboard</Link> (authenticated)</li>
//in routes we need a <Route Path="/:id" component={Dashboard} onEnter{requireAuth} />
