const React = require('react');

const Signup = React.createClass({
  handleSubmit : function(event) {
    event.preventDefault()

    const name = this.refs.name.value
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
        <div className="searchContainers">
          <div className="searchCenter">
            <h3>Sprinkle Signup</h3>
            <label><input id="signupName" type="text" ref="name" placeholder="name"/></label>
            <label><input id="signupEmail" type="text" ref="email" placeholder="email"/></label>
            <label><input id="signupPassword" type="password" ref="pass" placeholder="password" /></label><br />
            <button type="submit">signup</button>
          </div>
        </div>
      </form>
    )
  }
})

module.exports = Signup;
