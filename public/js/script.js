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
const About           = require( './components/about.js' )
const Login           = require( './components/login.js' )
const Signup          = require( './components/signup.js' )
const Logout          = require( './components/logout.js' )
const Display         = require( './components/display.js' )
const Search         = require( './components/search.js' )
const Listings         = require( './components/listings.js' )

const Nav             = require('./components/nav.js');


const App = React.createClass({
  // getInitialState : function() {
  //   return {
  //     loggedIn : false
  //   }
  // },

  addSearch : function ( newSearch ){
    const updateData = ( data ) => {
    console.log( data )
    }
  },

  render : function(){
    return(
    <div className="container">
        <div className="row"id="navbar">
          <div className="nav-wrapper">
            <h4>Nav Bar</h4>
            {/* API nav bar here */}
            {/*<Nav />*/}
          </div>
        </div>


        <div className="row" id="searchbar">
          <div className="nav-wrapper">
            <br/>
            {/* API search bar here */}
            <Search addSearch={ this.addSearch }/>
          </div>
        </div>


        <div className="row" id="display">
          <div className="nav-wrapper">
            <br/>
            {/* Initial Search Result Display */}
            <Display />
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
      <Route path="about" component={ About } />
      <Route path="nav" component={ Nav } />
      <Route path="search" component={ Search } />
      <Route path="listings" component={ Listings } />
      <Route path="display" component={ Display } />
    </Route>
  </Router>
)


ReactDOM.render( routes, document.querySelector( '#container' ) )
