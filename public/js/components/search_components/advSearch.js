const React = require('react');
const EmploymentType = require('./employmentType.js');
const JobResource = require('./jobResource.js');
const Radius = require('./radius.js');

const AdvSearch = React.createClass({

  handleSubmit : function( event ){
    event.preventDefault()
    let search = {
      q: this.refs.searchInput.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      jt: this.refs.jt.value,
      radius: this.refs.radius.value
    }
    this.props.addSearchIndeed( search )
    this.props.addSearchCareer( search )
    this.refs.searchForm.reset()
  },

  handleIndeedCheck : function() {
    this.props.toggleIndeed()
  },

  handleCareerCheck : function() {
    this.props.toggleCareer()
  },

  render : function() {
    return (
      <form ref="searchForm" onSubmit={ this.handleSubmit }>
        <input id="searchInput" type="text" placeholder="job title" ref="searchInput" required />
        <input id="city" type="text" placeholder="city" ref="city"  />
        <input id="state" type="text" placeholder="state" ref="state"  />
        <select ref='jt'>
          <EmploymentType/>
        </select>
        <select ref='radius'>
          <Radius />
        </select>
        <JobResource name="indeed" checked={ this.handleIndeedCheck }/>
        <JobResource name="careerbuilder" checked={ this.handleCareerCheck }/>
      <button type="submit" className="btn btn-primary btn-sm" id="searchButton">Search</button>
      </form>
    )
  }
})

module.exports = AdvSearch;
