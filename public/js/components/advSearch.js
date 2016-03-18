const React = require('react');

const AdvSearch = React.createClass({

  handleSubmit : function( event ){
    event.preventDefault()
    console.log( "search funciton clicked" )
    let search = {
      q: this.refs.searchInput.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      jt: this.refs.jt.value
    }
    console.log( 'search result: ', search )
    this.props.addSearch( search )
    this.refs.searchForm.reset()
  },

  render : function() {
    return (
      <form ref="searchForm" onSubmit={ this.handleSubmit }>
      <input id="searchInput" type="text" placeholder="job title" ref="searchInput" required />
      <input id="city" type="text" placeholder="city" ref="city"  />
      <input id="state" type="text" placeholder="state" ref="state"  />
      <select ref="jt">
        <option value="fulltime">Full Time</option>
        <option value="parttime">Part Time</option>
        <option value="contract">Contract</option>
        <option value="internship">Internship</option>
        <option value="tempoary">tempoary</option>
      </select>
      <button type="submit" className="btn btn-primary btn-sm" id="searchButton">Search</button>
      </form>
    )
  }
})

module.exports = AdvSearch;
