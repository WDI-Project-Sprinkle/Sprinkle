const React = require('react');
const auth = require('../auth.js');
const Signup = React.createClass({
  handleSubmit : function(event) {
    event.preventDefault()

    const name = this.refs.email.name
    const email = this.refs.email.value
    const pass = this.refs.pass.value

    $.post('/users', {email: email, password: pass, name: name})
    .done((data) => {
      this.props.signedIn();
    })
  },

  render : function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label><input ref="name" placeholder="name"/></label>
        <label><input ref="email" placeholder="email"/></label>
        <label><input ref="pass" placeholder="password" /></label><br />
        <button type="submit">signup</button>
      </form>
    )
  }
})

module.exports = Signup;
