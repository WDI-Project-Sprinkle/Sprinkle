'use strict'
const React = require( 'react' );
const CurrentJobs = require( './profileComponents/currentJobs.js');
const AppliedJobs = require( './profileComponents/appliedJobs.js');

const Profile = React.createClass({

  getInitialState:function(){
    // overall application state
    return { jobs : {} }
  },

  componentDidMount:function() {
   // this is where you'll get the data from the 'db'
   $.get('/jobs').done( data=>{

      data.forEach( el=> {
        this.state.jobs[ el.job_id ] = el;
      });

      this.setState( { jobs : this.state.jobs } )
    })
  },

  toggleJob : function( key ){
    this.state.jobs[ key ].completed = !this.state.jobs[ key ].completed;
    this.setState( { jobs : this.state.jobs } );
  },

  filterComplete:function( key ){
    return this.state.jobs[ key ].completed
  },

  filterNotComplete:function( key ){
    return !this.filterComplete( key )
  },

  renderJob:function( key ){
    return (
      <OneCurrentJob key={ key } index={ key } details={ this.state.jobs[ key ] } toggleJob={ this.toggleJob }/>
    )
  },



  render : function(){
    // const token = auth.getToken()

    return (
      <div className="profiles">
        <h1>User Info</h1>
        <p>You did it</p>
        <div className="current-jobs">
          <ul className="current-jobs-list">
            <li className="current-jobs-list-item"><h3>Jobs</h3></li>
            { Object.keys( this.state.jobs )
              .filter(this.filterNotComplete)
              .map( this.renderJob )}
          </ul>
        </div>
        <div className="applied-jobs">
          <ul className="applied-jobs-list">
            <li className="applied-jobs-list-item"><h3>Applied Jobs</h3></li>
            { Object.keys( this.state.jobs )
              .filter(this.filterComplete)
              .map( this.renderJob )}
          </ul>
        </div>
      </div>
    )
  }
})

const OneCurrentJob = React.createClass( {

  handleClick : function( event ) {
    event.preventDefault();
    this.props.toggleJob( this.props.index)
  },

  render: function() {
    return (
      <div id="current-jobs-div">
        <li className="job-item">
          <div>
            { this.props.details.company } ~ { this.props.details.job_desc } ~ { this.props.details.indeed_url }
            <a href=" # " onClick={ this.handleClick } className="current-jobs">
              <i className="material-icons">check</i>
            </a>
          </div>
        </li>
      </div>
    )
  }
})


module.exports = Profile;


//inside pgp.js
//inside script.js const Profile = require('./components/profile.js')
//inside nav.js <li><Link to="/:id">Dashboard</Link> (authenticated)</li>
//in routes we need a <Route Path="/:id" component={Dashboard} onEnter{requireAuth} />
