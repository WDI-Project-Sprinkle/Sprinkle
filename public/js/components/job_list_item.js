import React from 'react';

const JobListItem = (props) => {
  // careerBuilder jobs
  if (props.Company) {
    return (
      <form className="card">
        <div className="header">
        <strong>{props.Company}</strong> <br/>
        <strong>{props.JobTitle}</strong> <br/>
        </div>
        <div id="descripption" className="Description">
          {props.DescriptionTeaser}
        </div>
        <a href={props.url} target="_blank">CareerBuilder</a>
      </form>
    )
  }
  // indeed jobs
  return (
    <form className="card">
      <div className="header">
      <strong>{props.company}</strong> <br/>
      <strong>{props.jobtitle}</strong> <br/>
      </div>
      <div id="descripption" className="Description">
        {props.snippet}
      </div>
      <a href={props.url} target="_blank">Indeed</a>
    </form>
  );
};

export default JobListItem;
