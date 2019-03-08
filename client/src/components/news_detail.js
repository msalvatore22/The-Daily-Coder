import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveArticle } from "../actions";

class NewsDetail extends Component { 
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.title = React.createRef()
    this.author = React.createRef()
    this.url = React.createRef()
    this.img_url = React.createRef()
  }

  handleSubmit(event){
    event.preventDefault()
    let title = this.title.current.value
    let author = this.author.current.value
    let url = this.url.current.value
    let img_url = this.img_url.current.value

    const values = {
      title,
      author,
      url,
      img_url
    }
    
    this.props.saveArticle(values, () => {
      this.props.history.push('/articles')
    })
    
  }

  render(){
    const article = this.props.article
    if(!article){
      return( 
        <div style={{textAlign: 'center'}} className="col l4 offset-l1 s7 news-detail">
          <h4>Loading...</h4>
        </div>
      )
    } else if(article && !this.props.auth){
      return(
        <div className="col l4 offset-l1 s7 news-detail">
          <img className="article-img" src={article.urlToImage} alt="article" />
          <p>{article.title}</p>
          <p>{article.author}</p>
          <p>{article.description}</p>
          <div className="news-detail-btns">
          <a target="_blank" href={article.url}>
            <button className="btn btn-small waves-effect waves-light blue-grey delete-btn left">
              Full Article
              <i className="material-icons right">explore</i>
            </button>
          </a>
          <a href="/auth/google">
            <button className="btn btn-small waves-effect waves-light blue-grey save-btn right">
              Login to bookmark
              <i className="material-icons right">input</i>
            </button>
          </a>
          </div>
          
        </div>
      )
    } else {
      return(
        <div className="col l4 offset-l1 s7 news-detail">
          <img className="article-img" src={article.urlToImage} alt="article" />
          <p>{article.title}</p>
          <p>{article.author}</p>
          <p>{article.description}</p>
          <a target="_blank" href={article.url}>
            <button className="btn btn-small waves-effect waves-light blue-grey delete-btn left">
              Full Article
              <i className="material-icons right">explore</i>
            </button>
          </a>
        <div>
            <form className="news-detail-form" onSubmit={this.handleSubmit}>
              <input
                className="article-save-input"
                readOnly
                label="title"
                name="title"
                type="text"
                value={article.title}
                ref={this.title}
                component='input'
              />
              <input
                className="article-save-input"
                readOnly
                label="author"
                name="author"
                type="text"
                value={article.author}
                ref={this.author}
                component='input'
              />
              <input
                className="article-save-input"
                readOnly
                label="url"
                name="url"
                type="text"
                value={article.url}
                ref={this.url}
                component='input'
              />
              <input
                className="article-save-input"
                readOnly
                label="img_url"
                name="img_url"
                type="text"
                value={article.urlToImage}
                ref={this.img_url}
                component='input'
              />
              <button className="btn btn-small waves-effect waves-light blue-grey save-btn right" type="submit">
                Bookmark
                <i className="material-icons right">bookmark</i>
              </button>
            </form>
          </div>
        </div>
      )
    }
    
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, {saveArticle})(NewsDetail)
