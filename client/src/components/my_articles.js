import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSavedArticles } from "../actions";
import _ from 'lodash';
import { Link } from 'react-router-dom';

class MyArticles extends Component {
  componentWillMount(){
    this.props.fetchSavedArticles();
  }
  
  renderArticles(){
    return _.map(this.props.articles, article => {
      return (
        <li className="collection-item avatar">
          <img src={article.img_url} className="circle"></img>
          <span className="title">
            {article.title}
          </span>
          <p>
          
          {article.author} <br />
          {article.dateSaved} <br />
          
          <a target="_blank" href={article.url}>See Full Story</a>
          </p>
          <Link className="secondary-content" to={`/articles/${article._id}`}>
            <i className="material-icons">delete_sweep</i>
          </Link>
        </li>
      )
    }).reverse()
  }

  render(){
    return (
      <ul class="collection">
        {this.renderArticles()}
      </ul> 
    )
  }
}

function mapStateToProps({articles}){
  return { articles }
}

export default connect(mapStateToProps, {fetchSavedArticles})(MyArticles)