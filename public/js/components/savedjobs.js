'use strict'
const React = require( 'react' )
const ReactDOM = require( 'react-dom' )
const Job = require( './job.js' )

const SavedJobs = React.createClass({
  getInitialState : function(){
    return {
      savedJobs: {}
    }
  },

  componentDidMount : function(){
    $.get(
      {
      url: '/users/jobs',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader( "Authorization", 'Bearer ' + localStorage.token );
      }
    })
    .done( ( data )=> {
      this.state.savedJobs = data.indexByKey( 'job_id' );
      this.setState( { savedJobs : this.state.savedJobs } )
    })
  },

  resetSavedStateAfterDelete : function(){
    $.get(
      {
      url: '/users/jobs',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader( "Authorization", 'Bearer ' + localStorage.token );
      }
    })
    .done( ( data )=> {
      this.state.savedJobs = data.indexByKey( 'job_id' );
      this.setState( { savedJobs : this.state.savedJobs } )
    })
  },

  renderSavedJob : function( key ){
    return (
      <Job key={ key } index={ key } reset={this.resetSavedStateAfterDelete} details={ this.state.savedJobs[ key ] }/>
    )
  },


  render : function(){

    return (
      <div id="appliedjobs" className="column">
        <class id="saved_appliedjobs" className="ui teal header">
          <div className="content">
            <h1>Saved Jobs</h1>
          </div>
        </class>

        <div className="ui stacked segment">
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Job Title</th>
                <th>Indeed</th>
                <th>Indeed Url</th>
                <th>Career</th>
                <th>Career Url</th>
                <th>Action</th>
              </tr>
            </thead>
            {Object.keys(this.state.savedJobs).map(this.renderSavedJob)}
          </table>
        </div>
      </div>
    )
  }
})

module.exports = SavedJobs;
