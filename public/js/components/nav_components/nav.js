import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import Logout from './logout';
import Login from './login';
// import ToProfile from './toProfile';
// import Edit from './edit';

export default class Nav extends Component {
  render() {
    if (localStorage.token) {
      return (
        <div>
          <Link to="/profile">Profile</Link>
          <Logout />
        </div>
      )
    } else {
      return (
        <div>
          <Login />
          <Link to="/signup">Signup</Link>
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
