const React = require( 'react' );
const JobResource = require( './jobResource.js' );

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

    console.log("this is ref for jt", this.refs.jt.value);
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
       <div className="searchContainers">
         <div className="searchCenter">
         <input id="searchInput" type="text" placeholder="job title" ref="searchInput" required />
         </div>
         <div id="searchCityState">
           <div className="searchCenter">
             <input id="city" type="text" placeholder="city" ref="city"  />
           </div>

           <div className="searchCenter">
             <input id="state" type="text" placeholder="state" ref="state"  />
           </div>
         </div>
       </div>

       <br/>

       <div className="searchContainers">
         <div className="searchTypes">
            <div className="searchCenter">
              <select ref="jt">
                <option value="fulltime">Full Time</option>
                <option value="parttime">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
                <option value="tempoary">tempoary</option>
              </select>
            </div>
           <div  className="searchCenter">
             <select ref="radius">
               <option value="5">5 miles</option>
               <option value="10">10 miles</option>
               <option value="20">20 miles</option>
               <option value="30">30 miles</option>
               <option value="50">50 miles</option>
             </select>
          </div>
         </div>

         <div className="searchCenter">
           <JobResource name="indeed" checked={ this.handleIndeedCheck }/>
         </div>

         <div className="searchCenter">
           <JobResource name="careerbuilder" checked={ this.handleCareerCheck }/>
         </div>

         <div className="searchCenter">
         <button type="submit" className="btn btn-primary btn-sm allButtons" id="searchButton">Search</button>
         </div>
       </div>

     </form>
    )
  }
})

module.exports = AdvSearch;
