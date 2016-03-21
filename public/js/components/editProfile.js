const React = require('react');

const EditProfile = React.createClass({

  handleSubmit : function(event) {
    event.preventDefault();

    const currentPass = this.refs.currentPassword.value;
    const newPass = this.refs.newPassword.value;
    const confirmPass =this.refs.confirmPassword.value;

    let data = {
      currentPass : currentPass,
      newPass : newPass
    }

    if (newPass != confirmPass) {
      alert('You failure, the passwords do not match')
    } else {
      $.ajax(
        {
          url : '/users/update',
          data : data,
          type: 'put',
          beforeSend: function( xhr ) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.token );
          }
        }
      )
      .done(() => {
        this.props.updated();
      })
    }
  },

  handleDelete : function(event) {
    event.preventDefault();
    console.log('This is delete from ajax');
    $.ajax(
      {
        url : '/users/delete',
        method : "delete",
        beforeSend: function( xhr ) {
          xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.token );
        }
    })
    .done((data) => {
      this.props.deleted();
    })

  },

  render : function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="searchContainers">
          <div className="searchCenter">
            <h3>Sprinkle Edit</h3>
            <label><input id="currentPassword" type="password" ref="currentPassword" placeholder="current password"/></label>
            <label><input id="newPassword" type="password" ref="newPassword" placeholder="new password"/></label>
            <label><input id="confirmPassword" type="password" ref="confirmPassword" placeholder="confirm password" /></label><br />
            <button type="submit">confirm</button>
          </div>
          <a onClick={ this.handleDelete }>Delete Account</a>
        </div>
      </form>
    )
  }
})

module.exports = EditProfile;
