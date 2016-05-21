const React = require( 'react' );

const EditProfile = React.createClass({

  handleSubmit : function( event ) {
    event.preventDefault();

    const currentPass = this.refs.currentPassword.value;
    const newPass = this.refs.newPassword.value;
    const confirmPass =this.refs.confirmPassword.value;

    let data = {
      currentPass : currentPass,
      newPass : newPass
    }

    if ( newPass != confirmPass ) {
      alert('You failure, the passwords do not match')
    } else {
      $.ajax(
        {
          url : '/users/update',
          data : data,
          type: 'put',
          beforeSend: function( xhr ) {
            xhr.setRequestHeader( "Authorization", 'Bearer ' + localStorage.token );
          }
        }
      )
      .done(() => {
        this.props.updated();
      })
    }
  },

  handleDelete : function( event ) {
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
    .done( ( data ) => {
      this.props.deleted();
    })

  },

  render : function() {
    return (
      <div id="signupbox" className="ui middle aligned center grid">

        <div id="column" className="column">
          <class className="ui teal header">
            <div className="content">
              <h3>Sprinkle Edit</h3>
            </div>
          </class>

          <form className="ui form fluid" onSubmit={ this.handleSubmit }>

            <div id="formcontent" className="ui stacked segment teal">

              <div id="signupformfield" className="three wide field">
                <div className="ui left icon input">
                  <i className="ui lock icon"></i>
                  <input id="currentPassword" type="password" ref="currentPassword" placeholder="current password"/>
                </div>
              </div>

              <div id="signupformfield" className="three wide field">
                <div className="ui left icon input">
                  <i className="ui lock icon"></i>
                  <input id="newPassword" type="password" ref="newPassword" placeholder="new password"/>
                </div>
              </div>

              <div id="signupformfield" className="three wide field">
                <div className="ui left icon input">
                  <i className="ui lock icon"></i>
                  <input id="confirmPassword" type="password" ref="confirmPassword" placeholder="confirm password" />
                </div>
              </div>

              <button id="confirmButton" type="submit" className="ui button field"><i className="ui cloud upload icon"></i>confirm</button>

              <br/>

              <button id="deletebutton" className="ui button field" onClick={ this.handleDelete }><i className="ui trash icon"></i>Delete Account</button>

            </div>

          </form>

        </div>

      </div>

    )
  }
})

module.exports = EditProfile;
