import $ from 'jquery'; // requires jQuery for AJAX request
import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { // sets initial states
      email : '',
      password : '',
      error : ''
    }
  }

  render() {
    if (localStorage.token) { // checks if logged in
      return <h3>Welcome {this.state.email}!</h3>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            value={this.state.email} type="email" placeholder="email"
            onChange={event => this.onEmailChange(event.target.value)} />
            <br />
          <input
            value={this.state.password} type="password" placeholder="password"
            onChange={event => this.onPasswordChange(event.target.value)} />
            <br />
          <button type="submit">Submit</button>
          <h5>{this.state.error}</h5>
        </form>
      </div>
    )
  }
  onEmailChange(email) {
    this.setState({email}); // updates username state
  }
  onPasswordChange(password) {
    this.setState({password}); // updates password state
  }
  handleSubmit(event) {
    event.preventDefault(); // prevents page from refreshing
    let error = 'Oops, please check your email or password';
    if (this.state.email == '' || this.state.password == '') { // checks for real email/password
      this.setState({error:error})
    }
    $.post('/users/login', { // AJAX post request to users/login route
      email : this.state.email,
      password : this.state.password
    })
    .done((data) => {
      if (data.agent == 'error') { // if username/password doesn't match
        this.setState({error:error})
      } else { // if login is successful
        localStorage.token = data.token; // saves token to local storage
        browserHistory.push('/home'); // redirects to home
      }
    })
  }
}

// const Login = React.createClass({
//   handleLogin : function( event ) {
//     console.log("clicked")
//     event.preventDefault();
//     const username = this.refs.username.value;
//     const password = this.refs.password.value;
//     console.log(username)
//     this.props.login( username, password );
//   },
//
//   handleSignup : function( event ) {
//     event.preventDefault();
//     this.props.signup();
//   },
//
//   render : function() {
//     return (
//       <div>
//
//         {/* mobile menu */}
//         <div id="m_menu" className="ui floating sidebar inverted vertical menu">
//           <div rel="0" className="item">
//             <img src="../img/logo.png" alt="Logo" className="image"/>
//           </div>
//
//           <div rel="1" className="item">
//               <form id="loginform" className="ui form" onSubmit={ this.handleLogin } >
//                 <div className="fields">
//                   <div className="field">
//                     <input type="text" placeholder="email" ref="username"/>
//                   </div>
//                   <div className="field">
//                     <input type="password" placeholder="password" ref="password"/>
//                   </div>
//                   <button className="ui button submit labeled icon" type="submit"> <i className="icon sign in"></i> Login</button>
//                 </div>
//               </form>
//           </div>
//
//           <div rel="2" className="item">
//             <button className="ui button labeled icon"
//             onClick={ this.handleSignup } ><i className="icon sign out"></i>Signup</button>
//           </div>
//
//         </div>
//
//
//         <div id="m_btn" className="ui black labeled icon button">
//         <i className="icon fitted sidebar"></i> Menu
//         </div>
//
//         {/* regular menu */}
//         <div id="menu" className="ui top fixed three item menu stackable">
//           {/* Mobile Menu Button */}
//
//           <div className="item">
//
//             <h2 className="ui teal image header">
//               <img src="../img/logo.png" alt="Logo" className="image"/>
//               <div className="content">
//               prinkle
//               </div>
//             </h2>
//           </div>
//
//
//
//           <div className="item">
//               <form id="loginform" className="ui form" onSubmit={ this.handleLogin } >
//                 <div className="fields">
//                   <div className="field">
//                     <input type="text" placeholder="email" ref="username"/>
//                   </div>
//                   <div className="field">
//                     <input type="password" placeholder="password" ref="password"/>
//                   </div>
//                   <button className="ui button submit labeled icon"> <i className="icon sign in"></i> Login</button>
//                 </div>
//               </form>
//           </div>
//
//           <div className="item">
//             <button className="ui button labeled icon"
//             onClick={ this.handleSignup } ><i className="icon sign out"></i>Signup</button>
//           </div>
//
//         </div>
//       </div>
//     )
//   }
// })
//
//
// module.exports = Login;
