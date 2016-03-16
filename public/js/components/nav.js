const React = require('react');
const Logout = require('./logout.js');
const Login = require('./login.js');

const Nav = React.createClass({
  render : function() {
    return (
      <div>
        <ul>
          <li>
            <Logout/>
          </li>
        </ul>
      </div>
    )
  }
})

module.exports = Nav;
