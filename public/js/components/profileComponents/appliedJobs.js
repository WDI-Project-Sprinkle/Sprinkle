// 'use strict'
// const React = require( 'react' );
// const OneCompleteJob = require( './oneCompleteJob.js');
//
// const AppliedJobs = React.createClass( {
//
//   getInitialState:function(){
//     // overall application state
//     return { jobs : {}}
//   },
//
//   filterComplete:function( key ){
//     return this.state.jobs[ key ].completed
//   },
//
//   filterNotComplete:function( key ){
//     return !this.filterComplete( key )
//   },
//
//   renderJob:function( key ){
//     return (
//       <OneCompleteJob key={ key } index={ key } details={ this.state.jobs[ key ] } toggleJob={ this.toggleJob }/>
//     )
//   },
//
//   render: function() {
//     return (
//       <div id="applied-jobs-div">
//         <h1>Applied Jobs</h1>
//         <li className="job-item">
//           <div>
//             {/*complete tasks go here*/}
//             {Object.keys(this.state.jobs)
//               .filter(this.filterComplete)
//               .map( this.renderJob )}
//           </div>
//         </li>
//       </div>
//     )
//   }
// })
//
// module.exports = AppliedJobs;
