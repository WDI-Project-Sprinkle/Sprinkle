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
      url: '/users/jobs',
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

  // <Job   {Object.keys(this.state.appliedJobs).map(this.renderJob)} />


  render : function(){

    return (
      <div id="allAppliedJobs">
        <div id="appliedJobsOuter">
          <h1 id="appliedJobsInner">Applied Jobs</h1>
        </div>
        <div className="container" id="appliedJobsTable">
          <div className="row appliedJobColumn col-md-6 col-md-offset-2 custyle">
          <table className="appliedTable allATable table-striped custab">
          <thead>
            <tr>
              <th className="appliedTable tableHeader"></th>
              <th className="appliedTable appliedTableMedium tableCompany">Company</th>
              <th className="appliedTable appliedTableMedium tableTitle">Job Title</th>
              <th className="appliedTable tableIndeed">Indeed</th>
              <th className="appliedTable allButtons tableIndeedUrl">Indeed Url</th>
              <th className="appliedTable tableCareer">Career</th>
              <th className="appliedTable allButtons tableCareerUrl">Career Url</th>
              <th className="appliedTable text-center tableAction">Action</th>
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
