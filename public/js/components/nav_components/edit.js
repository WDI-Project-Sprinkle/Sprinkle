const React = require('react');

const Edit = React.createClass({
  handleEdit : function(event) {
    event.preventDefault();
    this.props.edit();
  },

  render : function() {
    return (
      <a onClick={ this.handleEdit }>Edit</a>
    )
  }
})

module.exports = Edit;
