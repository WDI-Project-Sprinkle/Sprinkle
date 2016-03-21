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
        <div className="navLeft outerSprinkleTitle">
          <h3 id="sprinkleTitle">Sprinkle</h3>
        </div>

        <div className="loginSignupInfo">
          {this.props.loggedIn ? (
          <div className="navRight"><ul>
            <div className="loggedInBoxEl navRight"><ToProfile ToProfile={ this.ToProfile }/></div>
            <div className="loggedInBoxEl navRight"><Edit edit={ this.edit }/></div>
            <div className="loggedInBoxEl navRight"><Logout logout={ this.logout }/></div>
          </ul></div>
          ) : (
          <ul>
            <div className="navRight"><Login login={ this.login }/></div>
            <div className="navRight">
            <button className="allButtons" id="signupButton" onClick={ this.handleSignup } >signup</button></div>
          </ul>
          )}
        </div>
      </div>
    )
  }
})

module.exports = Nav;
