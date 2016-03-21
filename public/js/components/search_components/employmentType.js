const React = require( 'react' );

const EmploymentType = React.createClass({
  render : function() {
    return (
      <select ref='jt'>
        <option value="fulltime">Full Time</option>
        <option value="parttime">Part Time</option>
        <option value="contract">Contract</option>
        <option value="internship">Internship</option>
        <option value="tempoary">tempoary</option>
      </select>
    )
  }
})

module.exports = EmploymentType;
