import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import Logout from './logout';
import Login from './login';

export default class Nav extends Component {
  render() {
    if (localStorage.token) {
      return (
        <div>
          <h2 className="ui teal image header">
            <img src="../img/logo.png" alt="Logo" className="image"/>
            <div className="content">
            prinkle
            </div>
          </h2>
          <br />
          <Link to="/home">Home</Link><br />
          <Link to="/profile">Profile</Link><br />
          <Link to="/edit">Edit</Link>
          <Logout />
        </div>
      )
    } else {
      return (
        <div id="menu" className="ui top fixed four item menu stackable">
          <div className="item">
            <h2 className="ui teal image header">
              <img src="../img/logo.png" alt="Logo" className="image"/>
              <div className="content">
              prinkle
              </div>
            </h2>
          </div><br/>
          <div className="item">
            <Link to="/home"><h2 className="navText">Home</h2></Link><br/>
          </div>
          <div className="item">
            <Link to="/signup"><h2 className="navText">Signup</h2></Link>
          </div><br/>
          <Login />
        </div>
      )
    }
  }
}

// const Nav = React.createClass({
//
//   login : function( username, password ) {
//     this.props.login( username, password )
//   },
//
//   logout : function() {
//     this.props.logout();
//   },
//
//   handleSignup : function( event ) {
//     event.preventDefault();
//     this.props.signup();
//   },
//
//   ToProfile : function() {
//     this.props.profile();
//   },
//
//   edit : function() {
//     this.props.edit();
//   },
//
//   render : function() {
//     return (
//       <div>
//           {/* Right Navbar */}
//           <div>
//             {this.props.loggedIn ? (
//
//             <div className="ui top fixed fluid three item menu stackable">
//               <div className="item">
//                 <ToProfile ToProfile={ this.ToProfile }/>
//               </div>
//
//               <div className="item">
//                 <Edit edit={ this.edit }/>
//               </div>
//
//               <div className="item">
//                 <Logout logout={ this.logout }/>
//               </div>
//             </div>
//
//             ) : (
//             <div className="item">
//                 <div>
//                   <Login login={ this.login }/>
//                 </div>
//             </div>
//
//             )}
//
//           </div>
//           <div id="signup" className="item">
//             <button className="ui button"
//             onClick={ this.handleSignup } >Signup</button>
//           </div>
//
//       </div>
//     )
//   }
// })
//
// module.exports = Nav;
