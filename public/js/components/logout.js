// const React = require('react');
//
// const Logout = React.createClass({
//   handleLogout : function( event ) {
//     event.preventDefault();
//     this.props.logout();
//   },
//
//   render : function() {
//     return (
//       <div className="item">
//         <button className="ui button"
//         onClick={ this.handleLogout }>
//         Logout
//         </button>
//       </div>
//     )
//   }
// })
//
// module.exports = Logout;

import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Logout extends Component {
  render() {
    return (
      <div className="item">
        <button className="navText"><h2 onClick={this.handleLogout}>Logout</h2></button>
      </div>
    )
  }

  handleLogout(event) {
    event.preventDefault();
    delete localStorage.token;
    browserHistory.push('/home'); // redirects to home
  }
}
