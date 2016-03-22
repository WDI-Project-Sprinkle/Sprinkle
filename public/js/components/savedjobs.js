'use strict'
const React = require( 'react' )
const ReactDOM = require( 'react-dom' )
const Job = require('./job.js')

const SavedJobs = React.createClass({
  // const token = auth.getToken()
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
        xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.token );
      }
    })
    .done((data)=> {
      this.state.savedJobs = data.indexByKey('job_id');
      this.setState({savedJobs : this.state.savedJobs})
    })
  },

  renderSavedJob : function(key){
    return (
      < Job className="resultTable" key={key} index={key} details={this.state.savedJobs[key]}/>
    )
  },
  // {Object.keys(this.state.savedJobs[key]).map(this.renderJob)}
  // <Job   {Object.keys(this.state.savedJobs).map(this.renderJob)} />

  render : function(){

    return (
      <div id="allSavedJobs">
        <div id="savedJobsOuter">
          <h1 id="savedJobsInner">Saved Jobs</h1>
        </div>
        <div className=" container" id="savedJobsTable">
          <div className="row col-md-6 col-md-offset-2 custyle">
          <table className="resultTable allTable table table-striped custab">
          <thead>
            <tr>
                <th className="resultTable tableHeader"></th>
                <th className="resultTable resultTableMedium tableCompany">Company</th>
                <th className="resultTable resultTableMedium tableTitle">Job Title</th>
                <th className="resultTable tableIndeed">Indeed</th>
                <th className="resultTable allButtons tableIndeedUrl">Indeed Url</th>
                <th className="resultTable tableCareer">Career</th>
                <th className="resultTable allButtons tableCareerUrl">Career Url</th>
                <th className="resultTable text-center tableAction">Action</th>
            </tr>
          </thead>
      {Object.keys(this.state.savedJobs).map(this.renderSavedJob)}
            </table>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = SavedJobs;


//inside pgp.js
//inside script.js const Profile = require('./components/profile.js')
//inside nav.js <li><Link to="/:id">Dashboard</Link> (authenticated)</li>
//in routes we need a <Route Path="/:id" component={Dashboard} onEnter{requireAuth} />
