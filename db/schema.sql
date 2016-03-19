DROP TABLE IF EXISTS appS CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS jobs CASCADE;



CREATE TABLE jobs (
  job_id INTEGER PRIMARY KEY,
  company VARCHAR(255),
  job_title VARCHAR(255),
  job_desc VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  salaries INTEGER,
  first_added TIMESTAMP,
  source_id VARCHAR(255),
  url VARCHAR(255),
  applied BOOLEAN NOT NULL default false
);

CREATE TABLE users (
  user_id SERIAL UNIQUE PRIMARY KEY,
  email VARCHAR(255),
  password_digest TEXT,
  name VARCHAR(255)
);

CREATE TABLE apps (
  PRIMARY KEY(job_id, user_id),
  job_id INTEGER REFERENCES jobs,
  user_id INTEGER REFERENCES users,
  saved_date TIMESTAMP
);
































-- DROP TABLE IF EXISTS jobs CASCADE;
-- DROP TABLE IF EXISTS applications CASCADE;
-- DROP TABLE IF EXISTS users CASCADE;
--
--
--
-- CREATE TABLE apps (
--   profile_id SERIAL UNIQUE PRIMARY KEY,
--   job_id INTEGER REFERENCES jobs,
--   saved_date TIMESTAMP,
--   applied BOOLEAN
-- );
--
-- CREATE TABLE users (
--    user_id SERIAL UNIQUE PRIMARY KEY,
--    email VARCHAR(255),
--    password_digest TEXT,
--    name VARCHAR(255),
--    profile_id INTEGER REFERENCES apps
-- );
