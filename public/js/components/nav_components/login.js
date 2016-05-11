const React = require('react');

const Login = React.createClass({
  handleLogin : function( event ) {
    event.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    this.props.login( username, password );
  },

  render : function() {
    return (
      <form id="loginForm" onSubmit={ this.handleLogin } >
      <div className="container" id="signinform">
        <input id="username" className="username" type="text" placeholder="email" ref="username"/>
        <input id="password" className="password" type="password" placeholder="password" ref="password"/>
        <button id="loginbutton" className="allButtons btn btn-primary btn-sm" type="submit">login</button>
      </div>
      </form>
    )
  }
})


module.exports = Login;
