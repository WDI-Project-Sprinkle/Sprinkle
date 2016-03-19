'use strict'
const React = require( 'react' )
const ReactDOM = require( 'react-dom' )

const AppliedJobs = React.createClass({
  // const token = auth.getToken()
  render : function(){

    return (
      <div>
        <h1>Applied Jobs</h1>
        <div className="container">
          <div className="row col-md-6 col-md-offset-2 custyle">
            <table className="table table-striped custab">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Job Title</th>
                  <th>Job Description</th>
                  <th>City</th>
                  <th>Job Added</th>
                  <th>Job_URL</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
                <tr>
                  <td>ABC</td>
                  <td>Web Developer</td>
                  <td>Front End</td>
                  <td>Brooklyn</td>
                  <td>March 01</td>
                  <td>JOB URL</td>
                  <td id="deleteButton" className="text-center"><a className='btn btn-info btn-xs' href="#"><span className="glyphicon glyphicon-remove"></span> Del</a></td>
                </tr>
                <tr>
                <td>CBA</td>
                <td>Web Developer</td>
                <td>Back End</td>
                <td>New York</td>
                <td>March 05</td>
                <td>JOB URL</td>
                  <td id="deleteButton" className="text-center"><a className='btn btn-info btn-xs' href="#"><span className="glyphicon glyphicon-remove"></span> Del</a></td>
                </tr>
                <tr>
                  <td>BAC</td>
                  <td>Web Developer</td>
                  <td>Reactjs</td>
                  <td>Queens</td>
                  <td>March 11</td>
                  <td>JOB URL</td>
                  <td id="deleteButton" className="text-center"><a className='btn btn-info btn-xs' href="#"><span className="glyphicon glyphicon-remove"></span> Del</a></td>
                </tr>
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
