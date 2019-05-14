import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header'
import News from './News'
import Articles from './articles_list'
import ArticlesShow from './articles_show'

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
            <Route exact path="/" component={News} />
            <Route exact path="/articles" component={Articles} />
            <Route path="/articles/:id" component={ArticlesShow} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
