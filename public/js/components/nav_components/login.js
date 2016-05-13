const React = require('react');

const Login = React.createClass({
  handleLogin : function( event ) {
    console.log("clicked")
    event.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    console.log(username)
    this.props.login( username, password );
  },

  handleSignup : function( event ) {
    event.preventDefault();
    this.props.signup();
  },

  render : function() {
    return (
      <div>

        {/* mobile menu */}
        <div id="m_menu" className="ui floating sidebar inverted vertical menu">
          <div rel="0" className="item">
            <h3>Sprinkle</h3>
          </div>

          <div rel="1" className="item">
              <form id="loginform" className="ui form" onSubmit={ this.handleLogin } >
                <div className="fields">
                  <div className="field">
                    <input type="text" placeholder="email" ref="username"/>
                  </div>
                  <div className="field">
                    <input type="password" placeholder="password" ref="password"/>
                  </div>
                  <button className="ui button submit labeled icon" type="submit"> <i className="icon sign in"></i> Login</button>
                </div>
              </form>
          </div>

          <div rel="2" className="item">
            <button className="ui button labeled icon"
            onClick={ this.handleSignup } ><i className="icon sign out"></i>Signup</button>
          </div>

        </div>


        <div id="m_btn" className="ui black labeled icon button">
        <i className="icon fitted sidebar"></i> Menu
        </div>

        {/* regular menu */}
        <div id="menu" className="ui top fixed three item menu stackable">
          {/* Mobile Menu Button */}

          <div className="item">
            <h3>Sprinkle</h3>
          </div>



          <div className="item">
              <form id="loginform" className="ui form" onSubmit={ this.handleLogin } >
                <div className="fields">
                  <div className="field">
                    <input type="text" placeholder="email" ref="username"/>
                  </div>
                  <div className="field">
                    <input type="password" placeholder="password" ref="password"/>
                  </div>
                  <button className="ui button submit labeled icon"> <i className="icon sign in"></i> Login</button>
                </div>
              </form>
          </div>

          <div className="item">
            <button className="ui button labeled icon"
            onClick={ this.handleSignup } ><i className="icon sign out"></i>Signup</button>
          </div>

        </div>
      </div>
    )
  }
})


module.exports = Login;
