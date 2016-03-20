const React = require( 'react' );

const Listings = React.createClass({

  handleSubmit : function(event) {
    event.preventDefault();
    this.props.savedJob(this.props.company, this.props.role, this.props.desc, this.props.city, this.props.state, this.props.salaries, this.props.first_added, this.props.id, this.props.url);
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          <li>
            <strong>Company Name:</strong> {this.props.company}
          </li>
          <li>
            <strong>Job Title:</strong> {this.props.role}
          </li>
          <li>
            <strong>Job Description:</strong> {this.props.desc}
          </li>
          <li>
            <a href={this.props.url} target="_blank"><strong>{this.props.name}</strong></a>
          </li>
          <button type="submit"> Save Job </button>
        </ul>
      </form>
    )
  }
})

module.exports = Listings;
