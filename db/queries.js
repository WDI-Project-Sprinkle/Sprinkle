
INSERT INTO jobs (company, job_title, job_desc, indeed) VALUES('Apple', 'Web developer', 'front end developer', True);

INSERT INTO jobs (company, job_title, job_desc, indeed) VALUES('Pear', 'Web developer', 'front end developer', False);

INSERT INTO jobs (company, job_title, job_desc, indeed) VALUES('Orange', 'Engineer', 'Electrical Engineer', False);


// able to get job info but not the user name with empty data
SELECT users.name as user_name, jobs.company as company, jobs.job_title as job_title, jobs.job_desc as job_desc, jobs.indeed as indeed
FROM apps
FULL OUTER JOIN jobs
ON apps.job_id = jobs.job_id
FULL OUTER JOIN users
ON apps.user_id = users.user_id;

// able to get job info & user name
SELECT users.name as user_name, jobs.company as company, jobs.job_title as job_title, jobs.job_desc as job_desc, jobs.indeed as indeed
FROM apps
FULL OUTER JOIN jobs
ON apps.job_id = jobs.job_id
LEFT JOIN users
ON apps.user_id = users.user_id;
