const React = require('react');

const Logout = React.createClass({
  handleLogout : function( event ) {
    event.preventDefault();
    this.props.logout();
  },

  render : function() {
    return (
      <div className="item">
        <button className="ui button"
        onClick={ this.handleLogout }>
        Logout
        </button>
      </div>
    )
  }
})

module.exports = Logout;
