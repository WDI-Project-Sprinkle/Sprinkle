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
      <div id="signupbox" className="ui middle aligned center aligned grid ">
        <div id="column" className="column">
          <class className="ui teal header">
            <div className="content">
              <h2>Sprinkle Signup</h2>
            </div>
          </class>

          <form className="ui form fluid" id="signupform" onSubmit={this.handleSubmit}>

            <div id="formcontent" className='ui stacked segment teal'>

              <div id="signupformfield" className="three wide field">
                <div className="ui left icon input">
                  <i className="ui user icon"></i><input type="text" ref="name" placeholder="Name"/>
                </div>
              </div>

              <div id="signupformfield" className="three wide field">
                <div className="ui left icon input">
                  <i className="ui mail outline icon"></i><input type="text" ref="email" placeholder="Email"/>
                </div>
              </div>

              <div id="signupformfield" className="three wide field">
                <div className="ui left icon input">
                  <i className="ui lock icon"></i><input type="password" ref="pass" placeholder="Password"/>
                </div>
              </div>

              <button className="ui button" type="submit">Signup</button>

            </div>

          </form>
        </div>
      </div>
    )
  }
})

module.exports = Signup;
