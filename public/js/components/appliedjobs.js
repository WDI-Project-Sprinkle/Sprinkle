'use strict'
const React = require( 'react' )
const ReactDOM = require( 'react-dom' )
const Job = require('./job.js')

const AppliedJobs = React.createClass({
  // const token = auth.getToken()
  getInitialState : function(){
    return {
      appliedJobs: {}
    }
  },

  componentDidMount : function(){
    console.log("hola from appliedJobs");
    $.get(
      {
      url: '/users/jobsapplied',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.token );
      }
    })
    .done((data)=> {
      this.state.appliedJobs = data.indexByKey('job_id');
      this.setState({appliedJobs : this.state.appliedJobs})
    })
  },

  renderAppliedJob : function(key){
    return (
      <Job details={this.state.appliedJobs[key]} index={key} key={key}/>
    )
  },


  render : function(){
    return (
      <div id="appliedjobs" className="column">
        <class id="saved_appliedjobs" className="ui teal header">
          <div className="content">
            <h1>Applied Jobs</h1>
          </div>
        </class>

        <div>
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
              {Object.keys(this.state.appliedJobs).map(this.renderAppliedJob)}
            </table>
          </div>

        </div>
      </div>
    )
  }
})

module.exports = AppliedJobs;


//inside pgp.js
//inside script.js const Profile = require('./components/profile.js')
//inside nav.js <li><Link to="/:id">Dashboard</Link> (authenticated)</li>
//in routes we need a <Route Path="/:id" component={Dashboard} onEnter{requireAuth} />
