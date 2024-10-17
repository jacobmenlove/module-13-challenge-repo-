# module-13-challenge-repo

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Local Storage](#local-storage)
- [Deployment](#deployment)


Overview

The Candidate Search Application is a web-based tool designed to help users search for potential candidates from GitHub based on various criteria. Users can view candidate profiles, save their favorites, and manage their saved candidates seamlessly. This application utilizes the GitHub API to fetch candidate data and provides a responsive user interface built with React and Vite.

Features

- Search Candidates**: Fetch candidates from GitHub based on user-defined criteria.
- Save Candidates**: Save candidates to local storage for easy access.
- View Saved Candidates**: Manage and remove candidates from the saved list.
- Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.

Technologies

This project is built using the following technologies:

- **Frontend**: 
  - React
  - Vite
  - TypeScript
  - React Router

- **Styling**: 
  - CSS

Installation

To set up the project locally, follow these steps:

Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/candidate-search.git
   cd candidate-search
Install dependencies: Make sure you have Node.js installed. Then run:

bash
Copy code
npm install
Create a .env file in the root directory with your GitHub API token:

plaintext
Copy code
YOUR_GITHUB_TOKEN=your_github_token_here
Usage
Run the Development Server: Start the development server by running:

bash
Copy code
npm run dev
Open your browser: Navigate to http://localhost:3000 to access the application.

Search for Candidates: Use the application to search for candidates and save your favorites.

View Saved Candidates: Navigate to the "Saved Candidates" page to manage your saved list.

Components
The application is structured into several key components:

CandidateSearch: Displays candidate profiles fetched from the GitHub API.
SavedCandidates: Manages and displays a list of saved candidates.
Nav: Provides navigation links between different pages.
CandidateCard: Renders individual candidate details (if implemented).
LoadingSpinner: Displays a loading indicator while fetching data (if implemented).
Local Storage
The application utilizes the browser's local storage to persist the list of saved candidates. This ensures that saved candidates remain accessible even after refreshing the page or closing the browser.

Deployment
The application can be deployed to Render. Follow these steps to deploy:

Create a new web service on Render.
Connect your GitHub repository to Render.
Set the build command to:
bash
Copy code
npm run build
Set the start command to:
bash
Copy code
npm run start
Add your environment variables in the Render dashboard, including your GitHub token.
