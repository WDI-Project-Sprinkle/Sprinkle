const React = require('react');

const Logout = require('./logout.js');
const Login = require('./login.js');
const ToProfile = require('./toProfile.js');
const Edit = require('./edit.js');

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

  edit : function() {
    this.props.edit();
  },

  render : function() {
    return (
      <div className="navContainers">
        <div className="navLeft"><h3>Sprinkle</h3></div>

          {this.props.loggedIn ? (
          <div className="navRight"><ul>
            <div className="navRight"><ToProfile ToProfile={ this.ToProfile }/></div>
            <br/>
            <div className="navRight"><Edit edit={ this.edit }/></div>
            <br/>
            <div className="navRight"><Logout logout={ this.logout }/></div>
          </ul></div>
          ) : (
          <ul>
            <div className="navRight"><Login login={ this.login }/></div>
            <div className="navRight"><a onClick={ this.handleSignup } >signup</a></div>
          </ul>
          )}
      </div>
    )
  }
})

module.exports = Nav;
