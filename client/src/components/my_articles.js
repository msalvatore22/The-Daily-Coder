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
        <div key={article._id} >
          <Link to={`/articles/${article._id}`}>
            {article.title}
          </Link>
          <img className="article-img" src={article.img_url}/>
          <h5>{article.title}</h5>
          <p>{article.author}</p>
          <p>{article.description}</p>
          <a target="_blank" href={article.url}>Full Story Here</a>
        
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