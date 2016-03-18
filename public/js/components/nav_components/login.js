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
      <form onSubmit={ this.handleLogin } >
        <input type="text" placeholder="username" ref="username"/>
        <input type="password" placeholder="password" ref="password"/>
        <button type="submit">login</button>
        <br/>
      </form>
    )
  }
})


module.exports = Login;
