import React from 'react';
import JobListItem from './job_list_item';

const JobList = (props) => {
  const indeedJobItems = props.indeedJobs.map((job) => {
    return (
      <JobListItem
      company={job.company}
      jobtitle={job.jobtitle}
      snippet={job.snippet}
      url={job.url}
      key={job.jobkey}/>
    )
  });

  const careerJobItems = props.careerJobs.map((job) => {
    return (
      <JobListItem
      Company={job.Company}
      JobTitle={job.JobTitle}
      DescriptionTeaser={job.DescriptionTeaser}
      url={job.JobDetailsURL}
      key={job.CompanyDID + job.DID}/>
    )
  });

  return (
    <div id="listings">
      <div id="listingcards" className="ui three columns cards stackable teal">
        {indeedJobItems}
        {careerJobItems}
      </div>
    </div>
  );
}

export default JobList;
