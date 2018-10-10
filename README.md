# The Daily Coder
*The daily coder is a web-application for developers to stay up-to-date on the latest technology trends and news.

## Tools Used:
* Javascript
* Node.js
* Express
* React
* Redux
* MongoDB
* Google Oauth with PassportJS
* Axios
* Materialize
* CSS
* News API


## Features:
* User authenication flow with Google Oauth using PassportJS and CookieSession on Express Server.
* Saved User record in MongoDB User collection on mlab.
* Used Redux to handle logging in and updating state of application and react header compoennt by setting up authentication reducer and fetchUser action creator using axios to call to backend api.
* Used Redux to handle initial state of news data in the newsfeed react component by creating news reducer and fetchNews action creator using axios to get news data from backend api.
* Used Redux-form in react searchbar component to update the state of the newsfeed component by adding a searchNews action creator to the news reducer.
