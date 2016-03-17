const express     = require('express');
const search      = express.Router();
// const bodyParser  = require('body-parser');
const db          = require('../db/pgp.js');
const request = require('request');

const url = 'http://api.indeed.com/ads/apisearch?'
const apikey = '2780049725342565';

search.route('/')
.get(getJobs, ( req, res ) => {
  res.send(res.data)
})

function getJobs(req, res, next) {
  request(url + 'publisher=' + apikey + '&q=' + req.query.data.q + '&l=' + req.query.data.l + '&co=us' + '&format=json' + '&v=2', function(err, response, body) {
    var data = JSON.parse(body);
    res.data = data.results;
    console.log('yo mama has a fat', body, 'res.data', res.data);
    next()
  });
}

module.exports = search;
