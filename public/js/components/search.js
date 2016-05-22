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
      <div className="ui inverted segment raised">

        <form className="ui form fluid" ref="searchForm" onSubmit={ this.handleSubmit }>
          <div className="searchContainers">

            <div className="field">
              <input type="text" placeholder="job title" ref="searchInput" required />
            </div>

            <div className="two fields">
              <div className="field">
                <input type="text" placeholder="city" ref="city"  />
              </div>

              <div className="field">
                <input type="text" placeholder="state" ref="state"  />
              </div>
            </div>

            <div>
              <button type="submit" className="ui button submit labeled icon red small"><i className="icon search"></i>Search</button>
            </div>

          </div>
        </form>

      </div>
    )
  }
})

module.exports = Search;
