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

export default class Logout extends Component {
  render() {
    return (
      <div className="item">
        <button className="ui button" onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }

  handleLogout(event) {
    event.preventDefault();
    delete localStorage.token;
  }
}
