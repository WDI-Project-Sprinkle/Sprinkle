DROP IF EXISTS jobs;
DROP IF EXISTS applications;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE jobs (
  job_id TEXT PRIMARY KEY UNIQUE,
  title TEXT,
  city TEXT,
  state TEXT,
  salaries INTEGER,
  first_added DATE,
  company TEXT,
  job_desc TEXT,
  indeed_id TEXT,
  career_id TEXT,
  url_1 TEXT,
  url_2 TEXT
);

CREATE TABLE applications (
  job_id TEXT references jobs,
  user_id TEXT references users,
  primary key ( job_id, id)



CREATE TABLE users (
  id SERIAL UNIQUE PRIMARY KEY,
  email VARCHAR(255),
  password_digest TEXT
