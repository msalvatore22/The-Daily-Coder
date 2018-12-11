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
      return <div className="col l3 offset-l1 s7 news-detail">
                <h4>Welcome to The Daily Coder</h4>
                <h5>Search, read, and bookmark your favorite coding articles!</h5>
            </div>
    } else {
      return(
        <div className="col l3 offset-l1 s7 news-detail">
          <img className="article-img" src={article.urlToImage}/>
          <p>{article.title}</p>
          <p>{article.author}</p>
          <p>{article.description}</p>
          <a target="_blank" href={article.url}>Full Story Here</a>
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
              <button className="btn waves-effect waves-light blue-grey save-btn" type="submit">
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

export default connect(null, {saveArticle})(NewsDetail)
