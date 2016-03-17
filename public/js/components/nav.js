const React = require('react');
const Logout = require('./logout.js');
const Login = require('./login.js');
const Signup = require('./signup.js');

const Nav = React.createClass({
  handleLogout : function( event ) {
    event.preventDefault();
    this.props.logout();
    console.log('you wanna leaves me');
  },

  handleLogin : function( event ) {
    event.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    this.props.login( username, password );
    console.log('You backs!');
  },

  handleSignup : function( event ) {
    event.preventDefault();
    this.props.signup();
  },

  render : function() {
    return (
      <nav id="navbar">
        <h3>SPRINKLE</h3>
        <ul>
          {this.props.loggedIn ? (
          <li><a onClick={ this.handleLogout }>Logout</a></li>
          ) : (
          <li>
            <form onSubmit={ this.handleLogin } >
              <input type="text" placeholder="username" ref="username"/>
              <input type="password" placeholder="password" ref="password"/>
              <button type="submit">login</button>
              <br/>
              <a onClick={ this.handleSignup } >signup</a>
            </form>
          </li>
          )}
        </ul>
      </nav>
    )
  }
})

module.exports = Nav;
