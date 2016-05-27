import React from 'react';

const JobListItem = ({job}) => {
  return (
    <li>
      {job.company}
      {job.jobtitle}
      {job.snippet}
    </li>
  );
};

export default JobListItem;
