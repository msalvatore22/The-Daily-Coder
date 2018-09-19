import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";
import _ from 'lodash';

class Newsfeed extends Component {
  componentWillMount(){
    this.props.fetchNews();
  }
  
  renderNews(){
    return _.map(this.props.news, article => {
      return (
        <li key={article.title}>
          {article.title}
        </li>
      )
    })
  }
  
  render(){
    return (
      <div>
        <ul>
          {this.renderNews()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ news }) {
  return { news }
}

export default connect(mapStateToProps, actions)(Newsfeed);