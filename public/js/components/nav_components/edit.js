const React = require('react');

const Edit = React.createClass({
  handleEdit : function(event) {
    event.preventDefault();
    this.props.edit();
  },

  render : function() {
    return (
      <div id="outerEditButton">
        <button id="editButton" onClick={ this.handleEdit }>Edit</button>
      </div>
    )
  }
})

module.exports = Edit;
