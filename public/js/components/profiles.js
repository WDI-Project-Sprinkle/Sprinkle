'use strict'
const React = require( 'react' )
const ReactDOM = require( 'react-dom' )
const SavedJobs       = require('../components/savedjobs.js');
const AppliedJobs     = require('../components/appliedjobs.js');


const Profiles = React.createClass({
  // const token = auth.getToken()

  render : function(){

    return (
      <div id="appliedSavedJobs">
        <SavedJobs />
        <AppliedJobs />
      </div>
    )
  }
})

module.exports = Profiles;


//inside pgp.js
//inside script.js const Profile = require('./components/profile.js')
//inside nav.js <li><Link to="/:id">Dashboard</Link> (authenticated)</li>
//in routes we need a <Route Path="/:id" component={Dashboard} onEnter{requireAuth} />
