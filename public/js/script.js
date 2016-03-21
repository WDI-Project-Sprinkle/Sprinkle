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
const EditProfile     = require( './components/editProfile.js' )
const Logout          = require( './components/nav_components/logout.js' )
const Display         = require( './components/display.js' )
const Search          = require( './components/search_components/search.js' )
const Listings        = require( './components/listings.js' )
const Nav             = require('./components/nav_components/nav.js');
const AdvSearch       = require('./components/search_components/advSearch.js');
const Profiles        = require('./components/profiles.js');
const SavedJobs       = require('./components/savedjobs.js');
const AppliedJobs     = require('./components/appliedjobs.js');
const Animation       = require('./components/animation.js');
const AnimationCareer = require('./components/animationCareer.js');

const utility         = require('./helpers/utility.js');

const App = React.createClass({

  getInitialState : function() {
    return {
      loggedIn : false,
      signupBox : false,
      advSearch : false,
      profile : false,
      edit : false,
      indeed : true,
      career : true,
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
      jt: newSearch.jt,
      radius: newSearch.radius
    }

    if (this.state.indeed == true) {
      $.get('/search/indeed',
      {
        data: data,
      })
      .done( (data) => {
        this.state.indeedJobs = data;
        this.state.signupBox = false;
        this.state.advSearch = false;
        this.state.indeed = true;
        this.state.career = true;
        this.state.profile = false;
        this.setState({ indeedJobs : this.state.indeedJobs, signupBox : this.state.signupBox, career : this.state.career, indeed : this.state.indeed, AdvSearch : this.state.AdvSearch });
      })
    } else {
      this.state.indeedJobs = [];
      this.setState({indeedJobs : this.state.indeedJobs})
    }
  },

  addSearchCareer : function ( newSearch ){
    if (this.state.advSearch == false) {
      newSearch.radius = 0;
    }

    var data = {
      q: newSearch.q,
      city: newSearch.city,
      state: newSearch.state,
      jt: newSearch.jt,
      radius: newSearch.radius
    }

    if (this.state.career == true) {
      $.get('/search/career',
      {
        data: data
      })
      .done( (data) => {
        this.state.careerJobs = data;
        this.state.career = true;
        this.state.indeed = true;
        this.state.signupBox = false;
        this.state.advSearch = false;
        this.state.profile = false;
        this.setState({ careerJobs : this.state.careerJobs, signupBox : this.state.signupBox, career : this.state.career, indeed : this.state.indeed, AdvSearch : this.state.AdvSearch });
      })
    } else {
      this.state.careerJobs = [];
      this.setState({careerJobs : this.state.careerJobs})
    }
  },

  login : function( username, password) {
    let data = {
      email: username,
      password: password
    }
    $.post('users/login', data)
    .done( (data) => {
      localStorage.token = data.token;
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
    this.state.edit = false;
    this.setState( { profile : this.state.profile, edit : this.state.edit})
  },

  handleAdvance : function() {
    this.state.advSearch = true;
    this.state.indeed = false;
    this.state.career = false;
    this.setState( { advSearch : this.state.advSearch, indeed : this.state.indeed, career : this.state.career } )
  },

  handleBasic : function() {
    this.state.advSearch = false
    this.state.indeed = true
    this.state.career = true
    this.setState( { advSearch : this.state.advSearch, indeed : this.state.indeed, career : this.state.career } )
  },

  toggleIndeed : function() {
    this.state.indeed = !this.state.indeed
    this.setState( { indeed : this.state.indeed } )
  },

  edit : function() {
    this.state.edit = true;
    this.state.profile = false;
    this.setState({ edit : this.state.edit, profile : this.state.profile});
  },

  deleted : function() {
    this.state.loggedIn = false;
    this.state.edit = false;
    this.setState({loggedIn : this.state.loggedIn, edit: this.state.edit})
  },

  updated : function() {
    this.state.edit = false;
    this.setState({edit : this.state.edit})
  },

  saveIndeedJob : function(company, jobtitle, snippet, city, state, salaries, date, jobkey, url) {

    let data = {
      company : company,
      jobtitle : jobtitle,
      snippet : snippet,
      city : city,
      state : state,
      salaries: salaries,
      date: date,
      jobkey: jobkey,
      url: url
    }

    if (this.state.loggedIn == true) {
      $.post(
        {
          url : '/users/IndeedJobs',
          data : data,
          beforeSend: function( xhr ) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.token );
          }
        }
      )
      .done(data => this.setState({
        savedJobs : data.indexByKey('job_id')
      }))
      alert('saved!')
    } else {
      alert('please sign in first!')
    }
  },

  saveCareerJob : function(Company, JobTitle, DescriptionTeaser, City, State, Pay, PostedDate, DID, JobDetailsURL) {

    let data = {
      Company : Company,
      JobTitle : JobTitle,
      DescriptionTeaser : DescriptionTeaser,
      City : City,
      State : State,
      Pay: Pay,
      PostedDate: PostedDate,
      DID: DID,
      JobDetailsURL: JobDetailsURL
    }
    if (this.state.loggedIn == true) {
      $.post(
        {
          url : '/users/CareerJobs',
          data : data,
          beforeSend: function( xhr ) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.token );
          }
        }
      )
      .done(data => this.setState({
        savedJobs : data.indexByKey('job_id')
      }))
      alert('saved!')
    } else {
      alert('please sign in first!')
    }
  },

  renderIndeedJobs : function(key) {
    return (
      <Animation key={key} index={key} details={this.state.indeedJobs[key]} />
    )
  },

  renderCareerJobs : function(key) {
    return (
      <AnimationCareer key={key} index={key} details={this.state.careerJobs[key]} />
    )
  },

  render : function() {
    let signedInView =
      <div>
      </div>
    let notSignedIn =
      <div>
        <Signup signedIn={ this.signedIn }/>
      </div>

    let editIsFalse =
      <div>
      </div>
    let editIsTrue =
      <div>
        <EditProfile deleted={this.deleted} updated={this.updated}/>
      </div>

    let regularSearch =
    <div>
      <Search addSearchIndeed={ this.addSearchIndeed } addSearchCareer={ this.addSearchCareer }/>
      <a onClick={this.handleAdvance}> advance search </a>
    </div>
    let advSearch =
      <div>
        <AdvSearch addSearchIndeed={ this.addSearchIndeed } addSearchCareer={ this.addSearchCareer } toggleIndeed={ this.toggleIndeed } toggleCareer={ this.toggleCareer}/>
        <a onClick={this.handleBasic}> basic search </a>
      </div>

      var showIndeedJobs = [];
      this.state.indeedJobs.forEach((el) => {
        showIndeedJobs.push(<Listings company={el.company} desc={el.snippet} role={el.jobtitle} city={el.city} state={el.state} salaries={el.salaries} first_added={el.date} id={el.jobkey} url={el.url} name='indeed' savedJob={this.saveIndeedJob} />)
      })

      var showCareerJobs = [];
      this.state.careerJobs.forEach((el) => {
        showCareerJobs.push(<Listings company={el.Company} desc={el.DescriptionTeaser} role={el.JobTitle} city={el.City} state={el.State} salaries={el.Pay} first_added={el.PostedDate} id={el.DID} url={el.JobDetailsURL} name='careerbuilder' savedJob={this.saveCareerJob} />)
      })

    let profilePage =
    <div>
      <Profiles />
    </div>

    return (
      <div className="container">
          <div className="row" id="navbar">
          <br/>
              <Nav loggedIn={ this.state.loggedIn } login={ this.login } logout={ this.logout } signup={ this.signup } profile={ this.profile } edit={ this.edit }/>
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
              { Object.keys(this.state.careerJobs).map(this.renderCareerJobs) }
              { Object.keys(this.state.indeedJobs).map(this.renderIndeedJobs) }
              {this.state.profile ? profilePage : ''}
              {this.state.signupBox ? notSignedIn : signedInView}
              {this.state.edit ? editIsTrue : editIsFalse}
              {/* Initial Search Result Display */}
              <Display />
            </div>
          </div>


          <div className="row" id="listings">
            <div className="nav-wrapper">
                <br/>
                {/* Initial Search Result Display */}
                { showIndeedJobs }

                { showCareerJobs }
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
