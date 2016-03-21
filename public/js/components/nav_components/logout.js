const React = require('react');

const Logout = React.createClass({
  handleLogout : function( event ) {
    event.preventDefault();
    this.props.logout();
  },

  render : function() {
    return (
      <li>
        <a id="cursor" onClick={ this.handleLogout }>Logout</a>
      </li>
    )
  }
})

module.exports = Logout;
