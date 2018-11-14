import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSavedArticles } from "../actions";
import _ from 'lodash';

class MyArticles extends Component {
  componentWillMount(){
    this.props.fetchSavedArticles();
    console.log(this.props.article)
  }
  
  renderArticles(){
    return _.map(this.props.articles, article => {
      return (
        <div key={article.title} >
          <p>{article.title}</p>
        </div>
      )
    })
  }

  render(){
    return (
      <div>
        {this.renderArticles()}
      </div>
    )
  }
}

function mapStateToProps({articles}){
  return { articles }
}

export default connect(mapStateToProps, {fetchSavedArticles})(MyArticles)