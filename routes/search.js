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

// search.route('/')
// .get(getJobsIndeed ( req, res ) => {
//   res.send(res.dataIndeed)
// })

search.route('/')
.get(getJobsCareer, ( req, res ) => {
  res.send(res.dataCareer)
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

// function getJobsIndeed(req, res, next) {
//   request(urlIndeed + 'publisher=' + apikeyIndeed + '&q=' + req.query.data.q + '&l=' + req.query.data.l + '&co=us&jt=' + req.query.data.jt + '&format=json&limit=20&v=2', function(err, response, body) {
//     var data = JSON.parse(body);
//     res.dataIndeed = data.results;
//     console.log('yo mama has a fat', body, 'res.data', res.data);
//     next()
//   });
// }

function getJobsCareer(req, res, next) {
  request(urlCareer + 'DeveloperKey=' + apikeyCareer + '&JobTitle=' + req.query.data.q + '&l=' + req.query.data.city + ',' + req.query.data.state, function(err, response, body) {
    parseString(body, function (err, result) {
      console.log('Results: ');
        console.dir(result);
        console.log('heyheyhehyehy',result.ResponseJobSearch.Results[0].JobSearchResult)
    });
    // res.dataCareer = result;
    // console.log('yo mama has a fat', result, 'res.data', res.data);
    // next()
  });
}




module.exports = search;
