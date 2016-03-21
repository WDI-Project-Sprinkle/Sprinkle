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
          <a id="logoutLink" onClick={ this.handleLogout }>Logout</a>
        </div>
      </li>
    )
  }
})

module.exports = Logout;
