
DROP TABLE IF EXISTS jobs CASCADE;
DROP TABLE IF EXISTS applications CASCADE;
DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE jobs (
  job_id INTEGER PRIMARY KEY,
  company VARCHAR(255),
  job_title VARCHAR(255),
  job_desc VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  salaries INTEGER,
  first_added TIMESTAMP,
  indeed_id VARCHAR(255),
  career_id VARCHAR(255),
  indeed_url VARCHAR(255),
  career_url VARCHAR(255)
);

CREATE TABLE apps (
  profile_id SERIAL UNIQUE PRIMARY KEY,
  job_id INTEGER REFERENCES jobs,
  saved_date TIMESTAMP,
  applied BOOLEAN
);

CREATE TABLE users (
   user_id SERIAL UNIQUE PRIMARY KEY,
   email VARCHAR(255),
   password_digest TEXT,
   name VARCHAR(255),
   profile_id INTEGER REFERENCES apps
);
