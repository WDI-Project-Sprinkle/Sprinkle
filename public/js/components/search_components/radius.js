const React = require('react');

const Radius = React.createClass({
  render : function() {
    return (
      <div>
        <option value="5">5 miles</option>
        <option value="10">10 miles</option>
        <option value="20">20 miles</option>
        <option value="30">30 miles</option>
        <option value="50">50 miles</option>
      </div>
    )
  }
})

module.exports = Radius;
