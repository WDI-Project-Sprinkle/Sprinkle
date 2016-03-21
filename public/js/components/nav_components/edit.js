const React = require('react');

const Edit = React.createClass({
  handleEdit : function(event) {
    event.preventDefault();
    this.props.edit();
  },

  render : function() {
    return (
      <div id="outerEditButton">
        <a id="editButton" onClick={ this.handleEdit }>Edit</a>
      </div>
    )
  }
})

module.exports = Edit;
