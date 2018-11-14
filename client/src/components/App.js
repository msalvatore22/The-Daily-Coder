import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header'
import Landing from './Landing'
import News from './News'
import MyArticles from './my_articles'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/newsfeed" component={News} />
            <Route exact path="/articles" component={MyArticles} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
