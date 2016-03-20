'use strict'
const React = require( 'react' )
const ReactDOM = require( 'react-dom' )

const SavedJobs = React.createClass({
  // const token = auth.getToken()
  render : function(){

    return (
      <div>
        <h1>Saved Jobs</h1>
        
      </div>
    )
  }
})

module.exports = SavedJobs;


//inside pgp.js
//inside script.js const Profile = require('./components/profile.js')
//inside nav.js <li><Link to="/:id">Dashboard</Link> (authenticated)</li>
//in routes we need a <Route Path="/:id" component={Dashboard} onEnter{requireAuth} />
