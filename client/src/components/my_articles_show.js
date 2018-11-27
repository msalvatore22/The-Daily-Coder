import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSavedArticle, deleteSavedArticle } from '../actions';
import { Link } from 'react-router-dom';

class MyArticlesShow extends Component {
  componentDidMount(){
    const { id } = this.props.match.params;

    this.props.fetchSavedArticle(id);
  }

  onDeleteClick(){
    const { id } = this.props.match.params;
    
    this.props.deleteSavedArticle(id)
    this.props.history.push('/articles');
  }

  render(){
    const { articles } = this.props

    if(!articles){
      return <div>Loading...</div>
    }
    return (
      <div>
      <Link to="/articles">Back to my articles</Link>
      
      <h1>{articles.title}</h1>
      <button onClick={this.onDeleteClick.bind(this)}>
        Delete Article
      </button>
      
        
      </div>
    )
  }
}

function mapStateToProps({articles}){
  return {articles}
}

export default connect(mapStateToProps, {fetchSavedArticle, deleteSavedArticle})(MyArticlesShow)