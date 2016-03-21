const React = require( 'react' );

const Job = React.createClass({

  handleDelete : function( event ) {
    event.preventDefault();
    let data = {
      job_id : this.props.details.job_id
    }
    $.ajax({
      url : '/users/jobs/delete',
      data : data,
      method : 'delete',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.token );
      }
    })
    .done((data)=> {
      this.props.reset()
    })
  },


  render : function() {
    return (

      <tr>
        <td><input type="checkbox" autoComplete="off" /></td>
        <td>{this.props.details.company}</td>
        <td>{this.props.details.job_title}</td>
        <td>{this.props.details.indeed}</td>
        <td><a href={this.props.details.indeed_url}>visit Indeed</a></td>
        <td>{this.props.details.career}</td>
        <td><a href={this.props.details.career_url}>visit Career</a></td>
        <td className="text-center">
        <button onClick={this.handleDelete} href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Delete
        </button>
        </td>
      </tr>
    )
  }
})

module.exports = Job;
