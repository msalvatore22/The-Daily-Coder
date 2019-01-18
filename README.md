# The Daily Coder
The daily coder is a web-application for developers to stay up-to-date on the latest technology trends and news. Built with Node.js, Express, React, Redux, and MongoDB/Mongoose, users are able to search for news topics and save their favorite articles.

![TheDailyCoder](https://michaelsalvatore.me/images/dailyCoder.png)

# About The Daily Coder

The goal of this project was to deploy my first React/Redux application with a Node.js/Express backend. The backend API handles Google OAuth 2.0 user authenication for login/logout with Passport.js, fetching news articles from the News API, and saving and deleting bookmarked articles. All requests to the backend API are handled with Redux and Redux-Thunk middleware to dispatch asynchronous actions to update state.

# Technologies Used:
* Node.js
* Express
* React
* Redux
* Redux-thunk
* MongoDB
* Mongoose
* Google Oauth with PassportJS
* Cookie Sessions
* Axios
* Materialize
* Javascript
* CSS
* News API

# Functionality
* Search any news topic and discover the top 20 most popular articles.
* Search results will show the picture of the article, the title, the author and a short description.
* Login with Google OAuth for the ability to save favorite articles.

# Beyond MVP
* Ability to tweet favorite articles.
* Multiple choices for OAuth login i.e Twitter, Facebook, GitHub.
