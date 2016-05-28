import React, {Component} from 'react';
import Nav from './nav';
import {browserHistory} from 'react-router';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = { // sets initial states
      currentPassword : '',
      newPassword : '',
      confirmPassword : '',
      error : ''
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div id="signupbox" className="ui middle aligned center aligned grid ">
          <div id="column" className="column">
            <class className="ui teal header">
              <div className="content">
                <h2>Account Settings</h2>
              </div>
            </class>
            <form className="ui form fluid" id="signupform" onSubmit={this.handleSubmit.bind(this)}>
              <div id="formcontent" className='ui stacked segment teal'>
                <div id="signupformfield" className="three wide field">
                  <div className="ui left icon input">
                    <i className="ui lock icon"></i>
                    <input value={this.state.currentPassword} placeholder="Current Password"
                    type="password"
                    onChange={event => this.onCurrentPasswordChange(event.target.value)}/>
                  </div>
                </div>
                <div id="signupformfield" className="three wide field">
                  <div className="ui left icon input">
                    <i className="ui lock icon"></i>
                    <input value={this.state.newPassword} type="password"
                    placeholder="New Password"
                    onChange={event => this.onNewPasswordChange(event.target.value)}/>
                  </div>
                </div>
                <div id="signupformfield" className="three wide field">
                  <div className="ui left icon input">
                    <i className="ui lock icon"></i>
                    <input value={this.state.confirmPassword} type="password"
                    placeholder="Confirm Password"
                    onChange={event => this.onConfirmPasswordChange(event.target.value)}/>
                  </div>
                </div>
                {this.state.error}
                <br />
                <button className="button" type="submit">Submit</button>
                <button className="button" onClick={this.handleDelete.bind(this)}>Delete Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  onCurrentPasswordChange(currentPassword) {
    this.setState({currentPassword}); // updates email state
  }

  onNewPasswordChange(newPassword) {
    this.setState({newPassword}); // updates password state
  }

  onConfirmPasswordChange(confirmPassword) {
    this.setState({confirmPassword}); // updates confirm password state
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = {
      currentPassword : this.state.currentPassword,
      newPassword : this.state.newPassword
    }

    if (this.state.newPassword != this.state.confirmPassword) {
      this.setState({error : 'Passwords do not match'})
    } else {
      $.ajax({
        url : '/users/update',
        data : data,
        type : 'put',
        beforeSend : (xhr) => {
          xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.token);
        }
      })
      .done((data) => {
        if (data == 'error') {
          this.setState({error : 'Wrong Password'})
        } else {
          browserHistory.push('/home'); // redirects to home
        }
      })
    }
  }

  handleDelete(event) {
    event.preventDefault();
    $.ajax({
      url : 'users/delete',
      type : 'delete',
      beforeSend : (xhr) => {
        xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.token);
      }
    })
    .done(() => {
      delete localStorage.token;
      browserHistory.push('/home'); // redirects to home
    })
  }
}
