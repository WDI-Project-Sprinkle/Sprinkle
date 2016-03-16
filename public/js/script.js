
'use strict'
console.log('react hered');

const React           = require('react');
const ReactDOM        = require('react-dom');
const $               = require('jquery');
const browserHistory  = require('react-router').browserHistory;
const Router          = require('react-router').Router;
const Route           = require('react-router').Route;
const Link            = require('react-router').Link;
const auth            = require('./auth');
const Login           = require('./components/login.js');
const About           = require('./components/about.js');
const Logout          = require('./components/logout.js');
const Signup          = require('./components/signup.js');
const Nav             = require('./components/nav.js');

const App = React.createClass({
  getInitialState : function() {
    return {
      loggedIn : true
    }
  },

  logout : function() {
    this.state.loggedIn=false
    this.setState( { loggedIn : this.state.loggedIn } )
  },

  logout : function() {
    this.state.loggedIn=false
    this.setState( { loggedIn : this.state.loggedIn } )
  }, 

  render : function() {
    return (
      <div>
        <Nav loggedIn={ this.state.loggedIn } logout={ this.logout }/>
        <h1>hey dude</h1>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('container'));
