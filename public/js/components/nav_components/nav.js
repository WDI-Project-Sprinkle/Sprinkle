const React = require( 'react' );

const Logout = require( './logout.js' );
const Login = require( './login.js' );
const ToProfile = require( './toProfile.js' );
const Edit = require( './edit.js' );

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
            <div id="cursor" className="navRight"><ToProfile ToProfile={ this.ToProfile }/></div>
            <br/>
            <div id="cursor" className="navRight"><Edit edit={ this.edit }/></div>
            <br/>
            <div id="cursor" className="navRight"><Logout logout={ this.logout }/></div>
          </ul></div>
          ) : (
          <ul>
            <div id="cursor" className="navRight"><Login login={ this.login }/></div>
            <div className="navRight">
            <button id="cursor" onClick={ this.handleSignup } >signup</button></div>
          </ul>
          )}
      </div>
    )
  }
})

module.exports = Nav;
