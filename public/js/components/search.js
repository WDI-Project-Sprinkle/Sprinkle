const React = require( 'react' );

const Search = React.createClass({

  handleSubmit : function( event ){
    event.preventDefault()
    console.log( "search funciton clicked" )
    let search = {
      q: this.refs.searchInput.value,
      city: this.refs.city.value,
      state: this.refs.state.value
    }
    console.log( 'search result: ', search )
    this.props.addSearchIndeed( search )
    this.props.addSearchCareer( search )
    this.refs.searchForm.reset()
  },


  render() {
    return (
      <form ref="searchForm" onSubmit={ this.handleSubmit }>
        <section className="col s12">
          <div className="input-field">
            <section id="search-display">
            <input id="searchInput" type="text" placeholder="job title" ref="searchInput" required />
            <input id="city" type="text" placeholder="city" ref="city"  />
            <input id="state" type="text" placeholder="state" ref="state"  />
            <button type="submit" className="btn btn-primary btn-sm" id="searchButton">Search</button>
            </section>
          </div>
        </section>
      </form>
    )
  }
})

module.exports = Search;
