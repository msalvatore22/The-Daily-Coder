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
      return <div>You have no saved articles.</div>
    }
    return (
      <div className="row">
      <div className="news-detail col l4 offset-l4">
        <img className="article-img" src={articles.img_url} />
        <h5>{articles.title}</h5>
        <p>{articles.author}</p>
        <p>{articles.description}</p>
        <a target="_blank" href={articles.url}>
          <button className="btn waves-effect waves-light blue-grey left">
            Full Article
            <i className="material-icons right">explore</i>
          </button>
        
        </a>
        <br></br>
        <br></br>
        
        
        
        <Link style={{color: 'white'}} to="/articles">
          <button className="btn waves-effect waves-light blue-grey delete-btn left">
            back
            <i className="material-icons left">reply</i>
          </button>
          
        </Link>
          

        
        <button className="btn waves-effect waves-light red accent-4 delete-btn right" onClick={this.onDeleteClick.bind(this)}>
          Delete Article
          <i className="material-icons right">delete</i>
        </button>
      </div>
      </div>
    )
  }
}

function mapStateToProps({articles}){
  return {articles}
}

export default connect(mapStateToProps, {fetchSavedArticle, deleteSavedArticle})(MyArticlesShow)