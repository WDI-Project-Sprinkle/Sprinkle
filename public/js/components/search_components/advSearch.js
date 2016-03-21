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
  //
  // <form ref="searchForm" onSubmit={ this.handleSubmit }>
  //   <input id="searchInput" type="text" placeholder="job title" ref="searchInput" required />
  //   <input id="city" type="text" placeholder="city" ref="city"  />
  //   <input id="state" type="text" placeholder="state" ref="state"  />
  //     <EmploymentType/>
  //   <select ref='radius'>
  //     <Radius />
  //   </select>
  //   <JobResource name="indeed" checked={ this.handleIndeedCheck }/>
  //   <JobResource name="careerbuilder" checked={ this.handleCareerCheck }/>
  // <button type="submit" className="btn btn-primary btn-sm" id="searchButton">Search</button>
  // </form>

  render : function() {
    return (
      // <form ref="searchForm" onSubmit={ this.handleSubmit }>
      //   <div className="searchContainers">
      //     <div className="searchCenter">
      //     <input id="searchInput" type="text" placeholder="job title" ref="searchInput" required />
      //     </div>
      //
      //     <div className="searchCenter">
      //     <input id="city" type="text" placeholder="city" ref="city"  />
      //     </div>
      //
      //     <div className="searchCenter">
      //     <input id="state" type="text" placeholder="state" ref="state"  />
      //     </div>
      //
      //     <div className="searchCenter">
      //     <button type="submit" className="btn btn-primary btn-sm" id="searchButton">Search</button>
      //     </div>
      //   </div>
      //
      //   <br/>
      //
      //   <div className="searchContainers">
      //     <div className="searchCenter">
      //       <EmploymentType />
      //     </div>
      //
      //     <div className="searchCenter">
      //       <Radius />
      //     </div>
      //
      //     <div className="searchCenter">
      //       <JobResource name="indeed" checked={ this.handleIndeedCheck }/>
      //     </div>
      //
      //     <div className="searchCenter">
      //       <JobResource name="careerbuilder" checked={ this.handleCareerCheck }/>
      //     </div>
      //
      //   </div>
      //
      // </form>
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
             <EmploymentType />
           </div>

           <div className="searchCenter">
             <Radius />
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
