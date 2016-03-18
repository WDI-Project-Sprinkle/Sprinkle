// 'use strict'
// const React = require( 'react' );
// const OneCurrentJob = require( './oneCurrentJob.js');
//
//
//
// const CurrentJobs = React.createClass( {
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
//       <OneCurrentJob key={ key } index={ key } details={ this.state.jobs[ key ] } toggleJob={ this.toggleJob }/>
//     )
//   },
//
//   render: function() {
//     return (
//       <div id="current-jobs-div">
//         <ul className="job-item">
//           <div>
//           <li className="collection-header"><h4>Completed Tasks</h4></li>
//           {/*complete tasks go here*/}
//           {Object.keys(this.state.jobs)
//             .filter(this.filterComplete)
//             .map( this.renderJob )}
//           </div>
//         </ul>
//       </div>
//     )
//   }
// })
//
// module.exports = CurrentJobs;
