DROP TABLE IF EXISTS jobs CASCADE;
DROP TABLE IF EXISTS app CASCADE;
DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE jobs (
  job_id SERIAL UNIQUE PRIMARY KEY,
  company VARCHAR(255),
  job_title VARCHAR(255),
  job_desc VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  salaries TEXT,
  first_added TIMESTAMP,
  indeed BOOLEAN,
  indeed_job_id VARCHAR(100),
  indeed_url VARCHAR(255),
  career BOOLEAN,
  career_job_id VARCHAR(100),
  career_url VARCHAR(255)
);

CREATE TABLE users (
  user_id SERIAL UNIQUE PRIMARY KEY,
  email VARCHAR(255),
  password_digest TEXT,
  name VARCHAR(255)
);

CREATE TABLE apps (
  user_id INTEGER REFERENCES users,
  job_id INTEGER REFERENCES jobs,
  PRIMARY KEY (user_id, job_id),
  saved_date TIMESTAMP,
  applied BOOLEAN
);
