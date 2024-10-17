# Module 13 Challenge: Candidate Search

## Your Task

TypeScript can enhance the overall development experience with React, leading to more reliable, maintainable, and scalable applications.

Your challenge is to complete a candidate search application that calls the GitHub API and renders data in the browser.

The application’s API, retrieves data from the GitHub API, has already been created. It's your job to complete the front end using TypeScript, call the application's API, and then deploy the entire application to Render.

* For more information on the data returned by the GitHub API, refer to the [GitHub Documentation on REST API Endpoints for Users](https://docs.github.com/en/rest/users/users).

> **important** You'll need to create a [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) to increase the API rate limit.

## User Story

```md
AS AN employer
I WANT a candidate search application
SO THAT I can hire the best candidates
```

## Acceptance Criteria

```md
GIVEN a candidate search application
WHEN the candidate search page loads
THEN the information for one candidate should be displayed, including the candidate's name, username, location, avatar, email, html_url, and company
WHEN I click the "+" button
THEN the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed
WHEN I click the "-" button
THEN the next candidate's information should be displayed without saving the current candidate
WHEN there are no candidates available to review
THEN an appropriate message should be shown indicating no more candidates are available
WHEN the potential candidates page loads
THEN the user should see a list of previously saved potential candidates with their name, username, location, avatar, email, html_url, and company
WHEN the page reloads
THEN the list of potential candidates should persist and be available for viewing
WHEN there are no potential candidates
THEN an appropriate message should be displayed indicating no candidates have been accepted
WHEN I click the "-" button
THEN the next candidate's information should be displayed without saving the current candidate
```

## Mock-Up

The following images show the web application's appearance and functionality:

![The candidate search page displays a candidate's information and allows the user to accept or reject the candidate and view a list of potential candidates.](./Assets/13-01-candidate_search_homepage.png)

![The potential candidates page displays a list of potential candidates and allows the user to reject a candidate.](./Assets/13-02-candidate_search_potential_candidates.png)

## Getting Started

* For this app to run, you'll need to create a GitHub Personal Access Token. Follow the instructions on [creating a fine-grained personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token), with the following caveats:

  * When creating your fine-grained token, leave all the default permissions. We don't need to add any additional privileges to this token, since we're only using it to search public profiles.

  * Once your token is generated, add it to a `.env` file in the `environment` folder as `VITE_GITHUB_TOKEN`. The included `.env.EXAMPLE` file can be used as an example.

  * You will NOT be able to view your token after you create it. If you forget to copy it over right away, you'll need to create a new token. 

The starter code provides:

* The application folder structure and scaffolding

* Code to retrieve data from the GitHub API

  * `./Develop/src/api/API.tsx`

You will need to:

* Create a `.env` file with your GitHub API token

* Complete code for the `CandidateSearch` and `SavedCandidates` pages

* Create any necessary components

* Use local storage

Refer to the [GitHub Documentation on Authenticating to the REST API](https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28#authenticating-with-a-personal-access-token) for information about creating your personal access token.

Refer to the [Full-Stack Blog on deploying to Render](https://coding-boot-camp.github.io/full-stack/render/render-deployment-guide) and the [Render documentation on setting environment variables](https://docs.render.com/configure-environment-variables).

## Bonus

As a bonus, try to add the ability to sort and filter the list of potential candidates.

## Grading Requirements

> **note** If a Challenge assignment submission is marked as “0”, it is considered incomplete and won't count toward your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Application uses the GitHub API to retrieve user data

* Application uses an interface to type user data

* Application stores potential candidates in localStorage

* Application is deployed to Render

### Deployment: 32%

* Application is deployed at live URL

* Application loads with no errors

* Application GitHub URL has been submitted

* GitHub repository contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the Challenge instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains a quality README file with a description, screenshot, and link to the deployed application

### Bonus: +10 Points

Fulfilling the following can add up to 10 points to your grade (note that the highest grade you can achieve is still 100):

* Application allows sorting and filtering of potential candidates

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application

* The URL of the GitHub repository (the repository should have a unique name and include a README describing the project)

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
