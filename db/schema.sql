DROP TABLE IF EXISTS indeed_jobs CASCADE;
DROP TABLE IF EXISTS career_jobs CASCADE;
DROP TABLE IF EXISTS app CASCADE;
DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE jobs (
  job_id SERIAL UNIQUE PRIMARY KEY,
  company VARCHAR(255),
  job_title VARCHAR(255),
  job_desc VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  salaries INTEGER,
  first_added TIMESTAMP,
  indeed BOOLEAN,
  indeed_job_id VARCHAR(100),
  career BOOLEAN,
  career_job_id VARCHAR(100),
  indeed_url VARCHAR(255)
);

CREATE TABLE apps (
  profile_id SERIAL UNIQUE PRIMARY KEY,
  indeed_id INTEGER REFERENCES indeed_jobs,
  career_id INTEGER REFERENCES career_jobs,
  saved_date TIMESTAMP,
  applied BOOLEAN,
  user_id REFERENCES users

);

CREATE TABLE users (
   user_id SERIAL UNIQUE PRIMARY KEY,
   email VARCHAR(255),
   password_digest TEXT,
   name VARCHAR(255),
);
