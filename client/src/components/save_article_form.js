import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveArticle } from "../actions";

class SaveArticleForm extends Component { 
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
    
    this.props.saveArticle(values)
    
  }

  render(){
    const selectedArticle = this.props.selectedArticle
    if(!selectedArticle){
      return( 
        <div>
          <h4>Loading...</h4>
        </div>
      )
    } else {
      return(
        <div>
            <form className="news-detail-form" onSubmit={this.handleSubmit}>
              <input
                className="article-save-input"
                readOnly
                label="title"
                name="title"
                type="text"
                value={selectedArticle.title}
                ref={this.title}
                component='input'
              />
              <input
                className="article-save-input"
                readOnly
                label="author"
                name="author"
                type="text"
                value={selectedArticle.author}
                ref={this.author}
                component='input'
              />
              <input
                className="article-save-input"
                readOnly
                label="url"
                name="url"
                type="text"
                value={selectedArticle.url}
                ref={this.url}
                component='input'
              />
              <input
                className="article-save-input"
                readOnly
                label="img_url"
                name="img_url"
                type="text"
                value={selectedArticle.urlToImage}
                ref={this.img_url}
                component='input'
              />
              <button className="btn btn-small waves-effect waves-light blue-grey save-btn right" type="submit">
                Bookmark
                <i className="material-icons right">bookmark</i>
              </button>
            </form>
          </div>
      )
    }
    
  }
}



export default connect(null, {saveArticle})(SaveArticleForm)