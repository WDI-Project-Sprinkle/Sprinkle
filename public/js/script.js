'use strict'

const $               = require( 'jquery' );
const React           = require( 'react' );
const ReactDOM        = require( 'react-dom' );
const ReactRouter     = require( 'react-router' );
const Router          = ReactRouter.Router;
const Route           = ReactRouter.Route;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;
const browserHistory  = ReactRouter.browserHistory;

const auth            = require( './auth.js' )
const Login           = require( './components/nav_components/login.js' )
const Signup          = require( './components/signup.js' )
const Logout          = require( './components/nav_components/logout.js' )
const Display         = require( './components/display.js' )
const Search          = require( './components/search.js' )
const Listings        = require( './components/listings.js' )
const Nav             = require('./components/nav_components/nav.js');
const AdvSearch       = require('./components/advSearch.js');
const Profiles        = require('./components/profiles.js');
const SavedJobs       = require('./components/savedjobs.js');
const AppliedJobs     = require('./components/appliedjobs.js');

const utility         = require('./helpers/utility.js');

const App = React.createClass({

  getInitialState : function() {
    return {
      loggedIn : false,
      signupBox : false,
      advSearch : false,
      profile : false,
      indeedJobs : [],
      careerJobs : [],
      savedJobs : []
    }
  },

  componentDidMount : function(){
    $.get('/users/jobs')
    .done(data => this.setState({
      savedJobs : data.indexByKey('job_id')
    }))
  },

  addSearchIndeed : function ( newSearch ){
    var cityState = newSearch.city + '+' + newSearch.state

    var data = {
      q: newSearch.q,
      city: newSearch.city,
      state: newSearch.state,
      l: cityState,
      jt: newSearch.jt
    }

    $.get('/search/indeed',
    {
      data: data
    })
    .done( (data) => {
      this.state.indeedJobs = data;
      this.state.signupBox = false;
      this.setState({ jobs : this.state.indeedJobs, signupBox : this.state.signupBox });
    })
  },

  addSearchCareer : function ( newSearch ){

    var data = {
      q: newSearch.q,
      city: newSearch.city,
      state: newSearch.state,
      jt: newSearch.jt
    }

    $.get('/search/career',
    {
      data: data
    })
    .done( (data) => {
      this.state.careerJobs = data;
      this.state.signupBox = false;
      this.setState({ jobs : this.state.careerJobs, signupBox : this.state.signupBox });
    })
  },

  login : function( username, password ) {
    let data = {
      email: username,
      password: password
    }
    $.post('users/login', data)
    .done( (data) => {
      this.state.loggedIn=true;
      this.state.signupBox=false;
      this.setState( { loggedIn : this.state.loggedIn, signupBox : this.state.signupBox } )
    })
  },

  logout : function() {
    this.state.loggedIn=false
    this.setState( { loggedIn : this.state.loggedIn } )
  },

  signup : function() {
    this.state.indeedJobs = [];
    this.state.careerJobs = [];
    this.state.signupBox=true;
    this.setState( { signupBox : this.state.signupBox, indeedJobs : this.state.indeedJobs,  careerJobs : this.state.careerJobs })
  },

  signedIn : function() {
    this.state.signupBox=false
    this.state.loggedIn=true
    this.setState( { signupBox : this.state.signupBox, loggedIn : this.state.loggedIn } )
  },

  profile : function() {
    this.state.profile=true
    this.setState( { profile : this.state.profile })
  },

  savedJobs : function() {
    $.get('/users/jobs')
    .done(data => this.setState({
      savedJobs : data.indexByKey('job_id')
    }))
  },

  handleAdvance : function() {
    this.state.advSearch=true
    this.setState( { advSearch : this.state.advSearch } )
  },

  handleBasic : function() {
    this.state.advSearch=false
    this.setState( { advSearch : this.state.advSearch } )
  },

  render : function() {
    let signedInView =
      <div>
      </div>
    let notSignedIn =
      <div>
        <Signup signedIn={ this.signedIn}/>
      </div>

    let regularSearch =
    <div>
      <Search addSearchIndeed={ this.addSearchIndeed } addSearchCareer={ this.addSearchCareer }/>
      <a onClick={this.handleAdvance}> advance search </a>
    </div>
    let advSearch =
      <div>
        <AdvSearch addSearchIndeed={ this.addSearchIndeed } addSearchCareer={ this.addSearchCareer }/>
        <a onClick={this.handleBasic}> basic search </a>
      </div>

      var showIndeedJobs = [];
      this.state.indeedJobs.forEach((el) => {
        showIndeedJobs.push(<li>Job Title: {el.jobtitle} <br/> Company Name: {el.company} <br/> <a href={el.url} target="_blank">indeed</a></li>);
      })

      var showCareerJobs = [];
      this.state.careerJobs.forEach((el) => {
        showCareerJobs.push(<li>Job Title: {el.JobTitle} <br/> Company Name: {el.Company} <br/> <a href={el.JobDetailsURL} target="_blank">careerbuilder</a></li>);
      })

    return (
      <div className="container">
          <div className="row" id="navbar">
          <br/>
              <Nav loggedIn={ this.state.loggedIn } login={ this.login } logout={ this.logout } signup={ this.signup } profile={ this.profile }/>
              {/* API nav bar here */}
              {/*<Nav />*/}
          </div>


          <div className="row" id="searchbar">
            <div className="nav-wrapper">
              <br/>
              {/* API search bar here */}
              {this.state.advSearch ? advSearch : regularSearch}
            </div>
          </div>


          <div className="row" id="display">
            <div className="nav-wrapper">
              <br/>

              <ul>
                { showIndeedJobs }
                { showCareerJobs }
              </ul>
              {this.state.signupBox ? notSignedIn : signedInView}
              {/* Initial Search Result Display */}
              <Display />
              <Profiles savedJobs={this.state.savedJobs}/>
            </div>
          </div>


          <div className="row" id="listings">
            <div className="nav-wrapper">
              <br/>
              {/* Initial Search Result Display */}
              <Listings />
            </div>
          </div>
      </div>
      )
    }

  });


  const routes = (
    <Router history={ browserHistory }>
      <Route path="/" component={ App } >
        <Route path="login" component={ Login } />
        <Route path="logout" component={ Logout } />
        <Route path="signup" component={ Signup } />
        <Route path="nav" component={ Nav } />
        <Route path="search" component={ Search } />
        <Route path="listings" component={ Listings } />
        <Route path="display" component={ Display } />
      </Route>
    </Router>
  )


  ReactDOM.render( routes, document.querySelector( '#container' ) )
