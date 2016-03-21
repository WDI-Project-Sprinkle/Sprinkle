const React = require('react');

const AnimationCareer = React.createClass({

  componentDidMount : function() {
    $('.circleBase').animate({'left' : '1000px'},1000)
  },

  render : function() {
    return (
      <div className="circleBase">
        <font size={'1'}> {this.props.details.Company} </font>
      </div>
    )
  }
})

module.exports = AnimationCareer;
