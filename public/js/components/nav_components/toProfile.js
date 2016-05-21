const React = require('react');

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
