const React = require( 'react' );

const Listings = React.createClass({

  handleSubmit : function( event ) {
    event.preventDefault();
    this.props.savedJob(this.props.company, this.props.role, this.props.desc, this.props.city, this.props.state, this.props.salaries, this.props.first_added, this.props.id, this.props.url);
  },

  render() {
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div>
        <div className="content">

          <div className="header">
            <strong>{this.props.company}</strong>
            <br/>
            <strong>{this.props.role}</strong>
          </div>

          <div id="descripption" className="Description">
            <p>{this.props.desc}</p>
          </div>

        </div>

        <div className="extra content">
          <div className="ui fluid two item menu">
            <div className="ui item">
              <button className="ui button">
                <a href={this.props.url} target="_blank"><strong>{this.props.name}</strong></a>
              </button>
            </div>
            <div className="ui item">
              <button className="ui button">Save Job</button>
            </div>
          </div>
        </div>
        </div>
      </form>
    )
  }
})

module.exports = Listings;
