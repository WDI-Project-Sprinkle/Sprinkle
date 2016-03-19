
const React = require( 'react' )


const OneCurrentJob = React.createClass( {

  getInitialState:function(){
    // overall application state
    return { jobs : {}
  },

  componentDidMount:function() {
   // this is where you'll get the data from the 'db'
   $.get('/jobs').done( data=>{

      data.forEach( el=> {
        this.state.jobs[ el.job_id ] = el;
      });

      this.setState( { jobs : this.state.jobs } )
    })
  },

  handleClick : function( event ) {
    event.preventDefault();
    this.props.toggleJob( this.props.index)
  },

  render: function() {
    return (
      <div id="current-jobs-div">
        <li className="job-item">
          <div>
            { this.props.details.job_title }{ this.props.details.job_desc }
            <a href=" # " onClick={ this.handleClick } className="current-jobs">
              <i className="material-icons">check</i>
            </a>
          </div>
        </li>
      </div>
    )
  }
})

module.exports = OneCurrentJob;
