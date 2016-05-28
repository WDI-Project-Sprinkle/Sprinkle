import React from 'react';

const JobListItem = (props) => {
  let save = '';
  if (localStorage.token) {
    save = <button className="saveButton">Save</button>
  }
  // careerBuilder jobs
  if (props.Company) {
    return (
      <form className="card">
        <div className="header">
        <strong>{props.Company}</strong> <br/>
        <strong>{props.JobTitle}</strong> <br/>
        </div>
        <div id="descripption" className="Description">
          <p>{props.DescriptionTeaser}</p>
        </div>
        <a href={props.url} target="_blank">CareerBuilder</a>
        {save}
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
        <p>{props.snippet}</p>
      </div>
      <a href={props.url} target="_blank">Indeed</a>
      {save}
    </form>
  );
};

export default JobListItem;
