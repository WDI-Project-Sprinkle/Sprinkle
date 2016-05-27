import React from 'react';
import JobListItem from './job_list_item';

const JobList = (props) => {
  const indeedJobItems = props.jobs.map((job) => {
    return (
      <JobListItem
      title={job.jobtitle}
      key={job.jobkey}
      job={job}/>
    )
  });

  return (
    <ul>
      {indeedJobItems}
    </ul>
  );
}

export default JobList;
