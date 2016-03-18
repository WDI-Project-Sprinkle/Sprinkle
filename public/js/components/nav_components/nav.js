const React = require('react');

const Logout = require('./logout.js');
const Login = require('./login.js');
const ToProfile = require('./toProfile.js')

const Nav = React.createClass({

  login : function( username, password ) {
    this.props.login( username, password )
  },

  logout : function() {
    this.props.logout();
  },

  handleSignup : function( event ) {
    event.preventDefault();
    this.props.signup();
  },

  ToProfile : function() {
    this.props.profile();
  },

  render : function() {
    return (
      <nav id="navbar">
        <h3>SPRINKLE</h3>
          {this.props.loggedIn ? (
          <ul>
            <Logout logout={ this.logout }/>
            <ToProfile ToProfile={ this.ToProfile }/>
          </ul>
          ) : (
          <ul>
            <Login login={ this.login }/>
            <a onClick={ this.handleSignup } >signup</a>
          </ul>
          )}
      </nav>
    )
  }
})

module.exports = Nav;
