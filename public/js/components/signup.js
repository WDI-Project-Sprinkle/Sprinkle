// const React = require('react');
//
// const Signup = React.createClass({
//   handleSubmit : function(event) {
//     event.preventDefault()
//
//     const name = this.refs.name.value
//     const email = this.refs.email.value
//     const pass = this.refs.pass.value
//
//     $.post('/users', {email: email, password: pass, name: name})
//     .done((data) => {
//       this.props.signedIn();
//     })
//   },
//
//   render : function() {
//     return (
//       <div id="signupbox" className="ui middle aligned center aligned grid ">
//         <div id="column" className="column">
//           <class className="ui teal header">
//             <div className="content">
//               <h2>Sprinkle Signup</h2>
//             </div>
//           </class>
//
//           <form className="ui form fluid" id="signupform" onSubmit={this.handleSubmit}>
//
//             <div id="formcontent" className='ui stacked segment teal'>
//
//               <div id="signupformfield" className="three wide field">
//                 <div className="ui left icon input">
//                   <i className="ui user icon"></i><input type="text" ref="name" placeholder="Name"/>
//                 </div>
//               </div>
//
//               <div id="signupformfield" className="three wide field">
//                 <div className="ui left icon input">
//                   <i className="ui mail outline icon"></i><input type="text" ref="email" placeholder="Email"/>
//                 </div>
//               </div>
//
//               <div id="signupformfield" className="three wide field">
//                 <div className="ui left icon input">
//                   <i className="ui lock icon"></i><input type="password" ref="pass" placeholder="Password"/>
//                 </div>
//               </div>
//
//               <button className="ui button" type="submit">Signup</button>
//
//             </div>
//
//           </form>
//         </div>
//       </div>
//     )
//   }
// })
//
// module.exports = Signup;

import $ from 'jquery';
import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = { // sets initial states
      name : '',
      email : '',
      password : '',
      confirmPassword : '',
      error : ''
    }
  }

  render() {
    return (
      <div id="signupbox" className="ui middle aligned center aligned grid ">
        <div id="column" className="column">
          <class className="ui teal header">
            <div className="content">
              <h2>Sprinkle Signup</h2>
            </div>
          </class>
          <form className="ui form fluid" id="signupform" onSubmit={this.handleSubmit.bind(this)}>
            <div id="formcontent" className='ui stacked segment teal'>
              <div id="signupformfield" className="three wide field">
                <div className="ui left icon input">
                  <i className="ui user icon"></i>
                  <input value={this.state.name} placeholder="Name"
                  onChange={event => this.onNameChange(event.target.value)}/>
                </div>
              </div>
              <div id="signupformfield" className="three wide field">
                <div className="ui left icon input">
                  <i className="ui mail outline icon"></i>
                  <input value={this.state.email} type="email" placeholder="Email"
                  onChange={event => this.onEmailChange(event.target.value)}/>
                </div>
              </div>
              <div id="signupformfield" className="three wide field">
                <div className="ui left icon input">
                  <i className="ui lock icon"></i>
                  <input value={this.state.password} type="password" placeholder="Password"
                  onChange={event => this.onPasswordChange(event.target.value)}/>
                </div>
              </div>
              <div id="signupformfield" className="three wide field">
                <div className="ui left icon input">
                  <i className="ui lock icon"></i>
                  <input value={this.state.confirmPassword} type="password"
                  placeholder="Confirm Password"
                  onChange={event => this.onConfirmPasswordChange(event.target.value)}/>
                </div>
              </div>
              {this.state.error}
              <br />
              <button className="ui button" type="submit">Signup</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  onNameChange(name) {
    this.setState({name}); // updates username state
  }

  onEmailChange(email) {
    this.setState({email}); // updates email state
  }

  onPasswordChange(password) {
    this.setState({password}); // updates password state
  }

  onConfirmPasswordChange(confirmPassword) {
    this.setState({confirmPassword}); // updates confirm password state
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name == '' || this.state.email == '') {
      this.setState({error : 'Oops, please fill the whole form!'});
    } else if (this.state.password != this.state.confirmPassword){
      this.setState({error : 'Oops, passwords did not match'});
    } else if (this.state.password.length < 8) {
      this.setState({error : 'Password needs to be at least 8 characters long.'});
    } else {
      $.post('/users/signup', { // stores new user
        name : this.state.name,
        email : this.state.email,
        password : this.state.password
      })
      .done((data) => {
        if (data.agent == 'error') {
          this.setState({error : 'That user already exists'});
        } else {
          $.post('/users/login', {
            email : this.state.email,
            password : this.state.password
          })
          .done((data) => {
            localStorage.token = data.token; // creates token
            browserHistory.push('/home'); // redirects to home
          })
        }
      })
    }
  }
}
