import React, {Component} from 'react';

export default class AdvSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitle : '',
      city : '',
      state : '',
      jobType : 'fulltime',
      radius : '20',
      indeed : false,
      career : false
    }
  }

  render() {
    return (
      <div className="ui inverted segment raised" id="searchbar" >

        <form className="ui form fluid" ref="searchForm"
        onSubmit={this.handleSubmit.bind(this)}>

         <div className="searchContainers">
           <div className="field">
             <input type="text" placeholder="job title"
             value={this.state.jobTitle} required
             onChange={event => this.onJobTitleChange(event.target.value)}/>
           </div>

           <div className="two fields">
             <div className="field">
               <input type="text" placeholder="city" value={this.state.city}
               onChange={event => this.onCityChange(event.target.value)}/>
             </div>

             <div className="field">
               <input type="text" placeholder="state" value={this.state.state}
               onChange={event => this.onStateChange(event.target.value)}/>
             </div>
           </div>
         </div>

         <br/>

         <div className="searchContainers">

           <div  className="three fields">

              <div className="field">

                  <select className="ui dropdown" value={this.state.jobType}
                  onChange={event => this.onJobTypeChange(event.target.value)}>

                    <option className="item" value="fulltime">Full Time</option>
                    <option className="item" value="parttime">Part Time</option>
                    <option className="item" value="contract">Contract</option>
                    <option className="item" value="internship">Internship</option>
                    <option className="item" value="tempoary">Tempoary</option>

                  </select>

              </div>

             <div className="field">

               <select className="ui dropdown" value={this.state.radius}
               onChange={event => this.onRadiusChange(event.target.value)}>

                 <option className="item" value="5">5 miles</option>
                 <option className="item" value="10">10 miles</option>
                 <option className="item" value="20">20 miles</option>
                 <option className="item" value="30">30 miles</option>
                 <option className="item" value="50">50 miles</option>

               </select>

            </div>

            <div className="grouped fields inline">
              <div className="searchCenter">
                <label><input type="checkbox"
                onClick={ this.handleIndeedCheck.bind(this) }/>Indeed</label>
              </div>

              <div className="searchCenter">
                <label><input type="checkbox"
                onClick={ this.handleCareerCheck.bind(this) }/>CareerBuilder</label>
              </div>
            </div>

           </div>

           <div>
             <button type="submit" className="ui button submit labeled icon small" className="button">
             <i className="icon search"></i>Search</button>
           </div>
           <br />
           <div>
             <button className="ui button submit labeledicon small" className="button"
             onClick={this.props.handleAdvSearch}>
             <i className="icon search"></i>Basic Search</button>
           </div>

         </div>

       </form>

     </div>
    )
  }

  onJobTitleChange(jobTitle) {
    this.setState({jobTitle}); //updates jobTitle state
  }

  onCityChange(city) {
    this.setState({city}); // updates city state
  }

  onStateChange(state) {
    this.setState({state}); // updates state state
  }

  onJobTypeChange(jobType) {
    this.setState({jobType}); // updates jobType state
  }

  onRadiusChange(radius) {
    this.setState({radius}); // updates radius state
  }

  handleCareerCheck() {
    this.setState({career : !this.state.career})
  }

  handleIndeedCheck() {
    this.setState({indeed : !this.state.indeed})
  }

  handleSubmit(event) {
    event.preventDefault();

    let data = {
      q : this.state.jobTitle,
      l : `${this.state.city} ${this.state.state}`,
      city : this.state.city,
      state : this.state.state,
      radius : this.state.radius,
      jt : this.state.jobType
    }
    if (this.state.indeed) { // searches indeed jobs if true
      $.get({
        url : '/search/indeed',
        data : data
      })
      .done((data) => {
        this.props.passIndeedData(data.results);
      })
    } else { // removes indeed jobs if untrue
      let data = [];
      this.props.passIndeedData(data);
    }

    if (this.state.career) { // searches career jobs if true
      $.get({
        url : '/search/career',
        data : data
      })
      .done((data) => {
        this.props.passCareerData(data);
      })
    } else { // removes career jobs if untrue
      let data = [];
      this.props.passCareerData(data);
    }
    this.setState({jobTitle : '', city : '', state : ''}) // resets form
  }
}

//
// const AdvSearch = React.createClass({
//
//   handleSubmit : function( event ){
//     event.preventDefault()
//     let search = {
//       q: this.refs.searchInput.value,
//       city: this.refs.city.value,
//       state: this.refs.state.value,
//       jt: this.refs.jt.value,
//       radius: this.refs.radius.value
//     }
//
//     console.log("this is ref for jt", this.refs.jt.value);
//     this.props.addSearchIndeed( search )
//     this.props.addSearchCareer( search )
//     this.refs.searchForm.reset()
//   },
//
//   handleIndeedCheck : function() {
//     this.props.toggleIndeed()
//   },
//
//   handleCareerCheck : function() {
//     this.props.toggleCareer()
//   },
//
//
//   render : function() {
//     return (
//       <div className="ui inverted segment raised" id="searchbar" >
//
//         <form className="ui form fluid" ref="searchForm" onSubmit={ this.handleSubmit }>
//
//          <div className="searchContainers">
//
//            <div className="field">
//              <input type="text" placeholder="job title" ref="searchInput" required />
//            </div>
//
//            <div className="two fields">
//              <div className="field">
//                <input type="text" placeholder="city" ref="city"  />
//              </div>
//
//              <div className="field">
//                <input type="text" placeholder="state" ref="state"  />
//              </div>
//            </div>
//
//          </div>
//
//          <br/>
//
//          <div className="searchContainers">
//
//            <div  className="three fields">
//
//               <div className="field">
//
//                   <select className="ui dropdown" ref="jt">
//
//                     <option className="item" value="fulltime">Full Time</option>
//                     <option className="item" value="parttime">Part Time</option>
//                     <option className="item" value="contract">Contract</option>
//                     <option className="item" value="internship">Internship</option>
//                     <option className="item" value="tempoary">Tempoary</option>
//
//                   </select>
//
//               </div>
//
//              <div className="field">
//
//                <select className="ui dropdown" ref="radius">
//
//                  <option className="item" value="5">5 miles</option>
//                  <option className="item" value="10">10 miles</option>
//                  <option className="item" value="20">20 miles</option>
//                  <option className="item" value="30">30 miles</option>
//                  <option className="item" value="50">50 miles</option>
//
//                </select>
//
//             </div>
//
//             <div className="grouped fields inline">
//               <div className="searchCenter">
//                 <JobResource name="indeed" checked={ this.handleIndeedCheck }/>
//               </div>
//
//               <div className="searchCenter">
//                 <JobResource name="careerbuilder" checked={ this.handleCareerCheck }/>
//               </div>
//             </div>
//
//            </div>
//
//
//
//            <div>
//              <button type="submit" className="ui button submit labeled icon red small"><i className="icon search"></i>Search</button>
//            </div>
//            <br />
//            <div>
//              <button className="ui button submit labeledicon red small"
//              onClick={this.props.handleAdvSearch}>
//              <i className="icon search"></i>Basic Search</button>
//            </div>
//
//          </div>
//
//        </form>
//
//      </div>
//     )
//   }
// })
//
// module.exports = AdvSearch;
