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
    let username = this.refs.username.value();
    let password = this.refs.password.value();
    this.props.login( username, password );
    console.log('You backs!');
  },

  render : function() {
    return (
      <div>
        <ul>
          {this.props.loggedIn ? (
          <li><a onClick={ this.handleLogout }>Logout</a></li>
          ) : (
          <form onSubmit={ this.handleLogin } >
            <input type="text" placeholder="username" refs="username"/>
            <input type="password" placeholder="password" refs="password"/>
            <button type="submit">login</button>
          </form>
          )}
        </ul>
      </div>
    )
  }
})

module.exports = Nav;
