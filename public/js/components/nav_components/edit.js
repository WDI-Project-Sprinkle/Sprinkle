const React = require('react');

const Edit = React.createClass({
  handleEdit : function(event) {
    event.preventDefault();
    this.props.edit();
  },

  render : function() {
    return (
      <div className="item">
        <button className="ui button"
        onClick={ this.handleEdit }>
        Edit
        </button>
      </div>
    )
  }
})

module.exports = Edit;
