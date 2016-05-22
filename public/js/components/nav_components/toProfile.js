import React, {Component} from 'react';
import {browserHistory, Link} from 'react-router';

const ToProfile = React.createClass({
  handleProfile : function( event ) {
    event.preventDefault();
    this.props.ToProfile();
  },

  render : function() {
    return (
        <div className="item">
          <button className="ui button"
          onClick={ this.handleProfile }>
          Profile
          </button>
        </div>
    )
  }
})

module.exports = ToProfile;

// export default class ToProfile extends Component {
//   render() {
//     return (
//       <Link to="/profile">Profile</Link>
//     )
//   }
// }
