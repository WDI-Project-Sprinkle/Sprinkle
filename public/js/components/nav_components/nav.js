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
        <div className="navLeft">
          <h3>Sprinkle</h3>
        </div>

        <div className="loginSignupInfo">
          {this.props.loggedIn ? (
// <<<<<<< HEAD
//             <div className="navRight">
//               <ul>
//                 <div className="navRight logoutLink"><Logout logout={ this.logout }/></div>
//                 <div className="navRight profileLink"><ToProfile ToProfile={ this.ToProfile }/></div>
//               </ul>
//             </div>
//           ) : (
//             <ul>
//               <div className="navRight"><Login login={ this.login }/></div>
//               <div className="navRight signupLink"><a onClick={ this.handleSignup } >signup</a></div>
//             </ul>
// =======
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
            <div className="navRight">
            <button onClick={ this.handleSignup } >signup</button></div>
          </ul>
>>>>>>> fd682c9986029271927d95ba06ba223c13f013f7
          )}
        </div>
      </div>
    )
  }
})

module.exports = Nav;
