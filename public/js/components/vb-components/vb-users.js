'use strict'
const React = require( 'react' )
const ReactDOM = require( 'react-dom' )

const Dashboard = React.createClass({
  render : function(){
    const token = auth.getToken()

    return (
      <div>
        <h1>User Info</h1>
        <p>You did it</p>
        <p>{token}</p>
      </div>
    )
  }
})

module.exports = Dashboard;


//inside pgp.js
//inside script.js const Dashboard = require('./components/vb-users.js')
//inside nav.js <li><Link to="/:id">Dashboard</Link> (authenticated)</li>
//in routes we need a <Route Path="/:id" component={Dashboard} onEnter{requireAuth} />
