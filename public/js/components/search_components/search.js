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
        <div className="searchContainers">
          <div className="searchCenter">
            <input id="searchInput" type="text" placeholder="job title" ref="searchInput" required />
          </div>
          <div className="cityState">
            <div className="searchCenter">
              <input id="city" type="text" placeholder="city" ref="city"  />
            </div>
            <div className="searchCenter">
              <input id="state" type="text" placeholder="state" ref="state"  />
            </div>
          </div>
          <div className="searchCenter">
            <button type="submit" className="btn btn-primary btn-sm allButtons" id="searchButton">Search</button>
          </div>
        </div>
      </form>
    )
  }
})

module.exports = Search;
