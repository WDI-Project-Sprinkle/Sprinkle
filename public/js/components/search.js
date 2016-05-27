import React, {Component} from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitle : '',
      city : '',
      state : ''
    }
  }

  render() {
    return (
      <div className="ui inverted segment raised" id="searchbar">
        <form className="ui form fluid" ref="searchForm" onSubmit={this.handleSubmit.bind(this)}>
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
            <div>
              <button type="submit"
              className="ui button submit labeled icon red small">
              <i className="icon search"></i>Search</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  onJobTitleChange(jobTitle) {
    this.setState({jobTitle}); // updates jobTitle state
  }

  onCityChange(city) {
    this.setState({city}); // updates city state
  }

  onStateChange(state) {
    this.setState({state}); // updates state state
  }

  handleSubmit(event) {
    event.preventDefault();

    let data = {
      q : this.state.jobTitle,
      l : `${this.state.city} ${this.state.state}`
    }

    $.get({
      url : '/search/indeed',
      data : data
    })
    .done((data) => {
      this.props.passIndeedData(data.results);
    })
  }
}
