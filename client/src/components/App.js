import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import NavBar from './NavBar'
import News from './News'
import MyArticles from './Articles'
import MyArticlesShow from './ArticleShow'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchNews();
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="*" component={NavBar} />
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
