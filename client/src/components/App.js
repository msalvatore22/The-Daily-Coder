import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import "materialize-css/dist/css/materialize.min.css";


import News from './News'
import MyArticles from './my_articles'
import MyArticlesShow from './my_articles_show'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={News} />
            <Route exact path="/articles" component={MyArticles} />
            <Route path="/articles/:id" component={MyArticlesShow} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
