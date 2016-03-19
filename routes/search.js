const express     = require('express');
const search      = express.Router();
// const bodyParser  = require('body-parser');
const db          = require('../db/pgp.js');
const request = require('request');
const parseString = require('xml2js').parseString;

const urlIndeed = 'http://api.indeed.com/ads/apisearch?'
const urlCareer = 'http://api.careerbuilder.com/v1/jobsearch?'
const apikeyIndeed = '2780049725342565';
const apikeyCareer = 'WDHL7WC6DQGVW4PVN3D3';

search.route('/indeed')
.get(getJobsIndeed, ( req, res ) => {
  res.send(res.dataIndeed)
})

search.route('/career')
.get(getJobsCareer, ( req, res ) => {
  res.json(res.dataCareer)
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

function getJobsIndeed(req, res, next) {
  request(urlIndeed + 'publisher=' + apikeyIndeed + '&q=' + req.query.data.q + '&l=' + req.query.data.l + '&co=us&jt=' + req.query.data.jt + '&radius=' + req.query.data.radius + '&format=json&limit=20&v=2', function(err, response, body) {
    var data = JSON.parse(body);
    res.dataIndeed = data.results;
    next()
  });
}

var data = ''
function getJobsCareer(req, res, next) {
  request(urlCareer + 'DeveloperKey=' + apikeyCareer + '&JobTitle=' + req.query.data.q + '&Location=' + req.query.data.city + ',' + req.query.data.state + '&Radius=' + req.query.data.radius + '&EmploymentType=' +req.query.data.jt, function(err, response, body) {
    parseString(body, function (err, result) {
      data = result.ResponseJobSearch.Results[0].JobSearchResult.map(job => job.pluckFirstArrayItem())
    });
    res.dataCareer = data;
    next()
  });
}

module.exports = search;
