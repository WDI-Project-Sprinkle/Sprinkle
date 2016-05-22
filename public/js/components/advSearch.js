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

         </div>

         <br/>

         <div className="searchContainers">

           <div  className="three fields">

              <div className="field">

                  <select className="ui dropdown" ref="jt">

                    <option className="item" value="fulltime">Full Time</option>
                    <option className="item" value="parttime">Part Time</option>
                    <option className="item" value="contract">Contract</option>
                    <option className="item" value="internship">Internship</option>
                    <option className="item" value="tempoary">Tempoary</option>

                  </select>

              </div>

             <div className="field">

               <select className="ui dropdown" ref="radius">

                 <option className="item" value="5">5 miles</option>
                 <option className="item" value="10">10 miles</option>
                 <option className="item" value="20">20 miles</option>
                 <option className="item" value="30">30 miles</option>
                 <option className="item" value="50">50 miles</option>

               </select>

            </div>

            <div className="grouped fields inline">
              <div className="searchCenter">
                <JobResource name="indeed" checked={ this.handleIndeedCheck }/>
              </div>

              <div className="searchCenter">
                <JobResource name="careerbuilder" checked={ this.handleCareerCheck }/>
              </div>
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

module.exports = AdvSearch;
