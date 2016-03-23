const React = require('react');

const Logout = React.createClass({
  handleLogout : function( event ) {
    event.preventDefault();
    this.props.logout();
  },

  render : function() {
    return (
      <li>
        <div id="OuterLogoutLink">
          <button id="logoutLink" onClick={ this.handleLogout }>Logout</button>
        </div>
      </li>
    )
  }
})

module.exports = Logout;
