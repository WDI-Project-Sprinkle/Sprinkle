const React = require( 'react' );

const Listings = React.createClass({
  render() {
    return (
      <li>
        {this.props.company}
        {this.props.role}
        {this.props.desc}
        {this.props.city}
        {this.props.state}
        {this.props.url}
      </li>
    )
  }
})

module.exports = Listings;
