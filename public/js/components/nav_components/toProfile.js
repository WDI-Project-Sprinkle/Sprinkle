const React = require('react');

const ToProfile = React.createClass({
  handleProfile : function( event ) {
    event.preventDefault();
    this.props.ToProfile();
  },

  render : function() {
    return (
      <li>
        <a onClick={ this.handleProfile }>Profile</a>
      </li>
    )
  }
})

module.exports = ToProfile;
