# Project Summary
Sprinkles is a web based job search application. Job listings from around the web are funneled into a singular website. Sprinkles goal is to make job searching as quick and painless as possible.
​
## Components
### Navigation Bar:
* User Name Input Field
 * Input will be associated with a refs value. If logging in, the username will be checked to see if exists. On sign-up, user name will be checked for uniqueness.
​
​
* Password Input Field
 * Password and username must match to login. Passwords will be hashed. Tokens will be created on user side.
​
* Login Button
 * Login Button will be used to trigger click event. Click event will lead to user authentification.
​
​
* Sign Up Link
 * Renders Sign-up component. Will be a form to create a new user. More information in the signup section.
​
​
* Sign Out Button (when logged in)
 * Will end the session of the current user.
​
​
​
* Profile Tab (when logged in)
 * When logged in, users will be able to see their profile. This page will render saved jobs and jobs previously applied for. More information in the profile page section.
​
​
​
### Sign Up
* Email Field
 * Upon signup, users will be asked to enter their email. The email will be checked for uniqueness.
​
​
* Name Field
 * Users will enter their name upon entry.
​
​
* User Name Field
 * Users will create a username for login purposes. The name will be checked for uniqueness.
​
​
* Password Field
 * password will be set at this step. Passwords are hashed to protect user security. Token approach will be used.
​
​
* Sign Up Button
 * Upon submit, the creditials will be checked against the current database. If user email/username already exists, an error promped will occur. Users will be redirected promped to reselect.
​
​
### Search Bar
* Basic Search
 * A quick search option for a broad range of results.
​
​
* Job Description Field
 * This will be the search query for matching job titles. The query will be linked to multiple APIs.
​
​
* Location Field
 * Location field will search for jobs within the desired vincinity. This is also a query.
​
​
* Search Button
 * starts the search, click event which will trigger a series of request. To third party APIs.
​
​
* Advanced Search Link
 * Advanced Search allows you to specify more catagories.
​
​
* Advanced Search
* # JIMMY ADD THE STUFF YOU MADE HERE
​
### D3 Display
* Catagorized Orbs
 * Must learn D3 to be uber awesome and visually satisfy all the eyes of the world.
​
​
### Detailed Display
* Job Summary
 * simple job summary. Will outline company name, job title, and date submitted. Will be a clickable link to the actual job posting.
​
### Profile Page
* Job Summary
 * simple job summary. Will outline company name, job title, and date submitted. Will be a clickable link to the actual job posting.
​
​
* Check Boxes
 * Check boxes will allow for single and mass deletion of jobs.
​
​
* Delete Button
 * I think you can figure out this one.
​
​
* Job Application Toggle
 * Jobs will be in either the saved job section or the applied job section. This will help users organize what needs to be applied for.
