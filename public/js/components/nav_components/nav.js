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
      <div>
          {/* Right Navbar */}
          <div>
            {this.props.loggedIn ? (

            <div className="ui top fixed fluid three item menu stackable">
              <div className="item">
                <ToProfile ToProfile={ this.ToProfile }/>
              </div>

              <div className="item">
                <Edit edit={ this.edit }/>
              </div>

              <div className="item">
                <Logout logout={ this.logout }/>
              </div>
            </div>

            ) : (
            <div className="item">
                <div>
                  <Login login={ this.login }/>
                </div>
            </div>

            )}

          </div>
          <div id="signup" className="item">
            <button className="ui button"
            onClick={ this.handleSignup } >Signup</button>
          </div>

      </div>
    )
  }
})

module.exports = Nav;
