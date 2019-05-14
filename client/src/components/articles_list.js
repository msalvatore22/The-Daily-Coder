import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSavedArticles } from "../actions";
import _ from 'lodash';
import { Link } from 'react-router-dom';

class Articles extends Component {
  componentDidMount(){
    this.props.fetchSavedArticles();
  }
  
  renderArticles(){
    if(this.props.articles.length === 0){
      return <div style={{textAlign: 'center'}}><h1>You have no saved articles.</h1></div>
    } else {
      return _.map(this.props.articles, article => {
        return (
          <li key={article._id} className="collection-item avatar">
            <img src={article.img_url} className="circle" alt="article"></img>
            <span className="title">
              {article.title}
            </span>
            <p>{article.author}</p>
            <p>Saved on {article.dateSaved}</p>
            <a target="_blank" href={article.url}>
              <button className="btn waves-effect waves-light blue-grey btn-small delete-btn">
                  Full Article
                  <i className="material-icons right">explore</i>
              </button>
            </a>
            <Link className="secondary-content" to={`/articles/${article._id}`}>
              <i className="material-icons collection-icon">delete_sweep</i>
            </Link>
          </li>
        )
      }).reverse()
    }
  }

  render(){
    if(!this.props.auth){
      this.props.history.push({
        pathname: '/'
      })
    }
    return (
      <ul className="collection">
        {this.renderArticles()}
      </ul> 
    )
  }
}

function mapStateToProps({articles, auth}){
  return { articles, auth }
}

export default connect(mapStateToProps, {fetchSavedArticles})(Articles)