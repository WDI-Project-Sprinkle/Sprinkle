const React = require('react');

const Logout = React.createClass({
  handleLogout : function( event ) {
    event.preventDefault();
    this.props.logout();
    console.log('you wanna leaves me');
  },

  render : function() {
    return (
      <li>
        <a onClick={ this.handleLogout }>Logout</a>
      </li>
    )
  }
})

module.exports = Logout;
