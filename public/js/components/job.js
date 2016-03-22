const React = require( 'react' );

const Job = React.createClass({

  handleDelete : function(event) {
    event.preventDefault();

    let data = {
      job_id : this.props.details.job_id
    }
    console.log("This is the job id", this.props.details.job_id);
    console.log('This is in handleDelete');

    $.ajax({
      url : '/users/jobs/delete',
      data : data,
      method : 'delete',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.token );
      }
    })
    .done((data)=> {

    })
  },

  render : function() {
    console.log(this.props.details.company);
    return (

      <tr>
        <td id="outerCheckboxJobs"><input type="checkbox" autoComplete="off" /></td>
        <td>{this.props.details.company}</td>
        <td>{this.props.details.job_title}</td>
        <td>{this.props.details.indeed}</td>
        <td id="outerIndeedUrlLink"><a className="indeedUrlLink" href={this.props.details.indeed_url}>visit Indeed</a></td>
        <td>{this.props.details.career}</td>
        <td id="outerCareerUrlLink"><a className="careerUrlLink" href={this.props.details.career_url}>visit Career</a></td>
        <td className="text-center">
        <button onClick={this.handleDelete} href="#" className=" allDeleteButtons btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Delete
        </button>
        </td>
      </tr>
    )
  }
})

module.exports = Job;
