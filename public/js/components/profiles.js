'use strict'
const React = require( 'react' )
const ReactDOM = require( 'react-dom' )
const SavedJobs       = require( '../components/savedjobs.js' );
const AppliedJobs     = require( '../components/appliedjobs.js' );


const Profiles = React.createClass({

  render : function(){

    return (
      <div>
        <SavedJobs />
        <AppliedJobs />
      </div>
    )
  }
})

module.exports = Profiles;
