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

// @author Jason Seminara 2016-03-18
// @description This will take an object whose vals are arrays; pluck off the first item and save it as the new val
// @returns a copy of the original
Object.prototype.pluckFirstArrayItem = function(first_argument) {
  return Object.keys(this).reduce((copy,key)=>{
    copy[key]=this[key][0]
    return copy;
  }
  ,{})
};


function getJobs(req, res, next) {
  request(url + 'publisher=' + apikey + '&q=' + req.query.data.q + '&l=' + req.query.data.l + '&co=us&jt=' + req.query.data.jt + '&format=json&limit=20&v=2', function(err, response, body) {
    var data = JSON.parse(body);
    res.data = data.results;
    console.log('yo mama has a fat', body, 'res.data', res.data);
    next()
  });
}




module.exports = search;
