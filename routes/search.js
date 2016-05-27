const express      = require('express');
const search       = express.Router();
const request      = require('request');
const parseString  = require('xml2js').parseString;
const apikeyIndeed = process.env.API_INDEED_KEY;
const apikeyCareer = process.env.API_CAREER_KEY;
let data           = '';

search.get('/indeed', getJobsIndeed, (req, res) => {res.send(res.dataIndeed)})
search.get('/career', getJobsCareer, (req, res) => {res.json(res.dataCareer)})

// @author Jason Seminara 2016-03-18
// @description This will take an object whose vals are arrays; pluck off the first item and save it as the new val
// @returns a copy of the original
Object.prototype.pluckFirstArrayItem = (first_argument) => {
  return Object.keys(this).reduce((copy, key) => {
    copy[key] = this[key][0]
    return copy;
  }
  ,{})
};

function getJobsIndeed(req, res, next) {
  request(`http://api.indeed.com/ads/apisearch?publisher=${apikeyIndeed}&q=${req.query.q}&l=${req.query.l}&co=us&jt=${req.query.jt}&radius=${req.query.radius}&format=json&limit=20&v=2`,
  (err, response, body) => {
    var data = JSON.parse(body);
    res.dataIndeed = data;
    next()
  });
}

function getJobsCareer(req, res, next) {
  request(`http://api.careerbuilder.com/v1/jobsearch?DeveloperKey=${apikeyCareer}
  &JobTitle=${req.query.data.q}&Location=${req.query.data.city},
  ${req.query.data.state}&Radius=${req.query.data.radius}
  &EmploymentType=${req.query.data.jt}`, (err, response, body) => {
    parseString(body, (err, result) => {
      data = result.ResponseJobSearch.Results[0].JobSearchResult.map(job => job.pluckFirstArrayItem())
    });
    res.dataCareer = data;
    next()
  });
}

module.exports = search;
