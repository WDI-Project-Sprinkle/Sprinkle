'use strict'
const React = require( 'react' )
const ReactDOM = require( 'react-dom' )
const SavedJobs       = require( '../components/savedjobs.js' );
const AppliedJobs     = require( '../components/appliedjobs.js' );
import Nav from './Nav';


const Profiles = React.createClass({

  render : function(){

    return (
      <div>
        <Nav />
        <SavedJobs />
        <AppliedJobs />
      </div>
    )
  }
})

module.exports = Profiles;
