const React = require('react');
const auth = require('../auth.js');
const Signup = React.createClass({
  handleSubmit : function(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    $.post('/users', {email: email, password: pass})
    .done((data) => {
    })
  },

  render : function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label><input ref="email" placeholder="email"/></label>
        <label><input ref="pass" placeholder="password" /></label><br />
        <button type="submit">login</button>
        {this.state.error && (
          <p>Bad login information</p>
        )}
      </form>
    )
  }
})

module.exports = Signup;
