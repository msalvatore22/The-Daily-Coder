import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveArticle } from "../actions";

class SaveArticleForm extends Component { 
  constructor(props){
    super(props)

    this.state = {
      saved: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.title = React.createRef()
    this.author = React.createRef()
    this.url = React.createRef()
    this.img_url = React.createRef()
  }

  async handleSubmit(event){
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
    
    await this.props.saveArticle(values)
    this.setState(prevState => ({
      saved: !prevState.saved
    }))
  }

  render(){
    const selectedArticle = this.props.selectedArticle
    const saved = this.state.saved
    if(!selectedArticle){
      return( 
        <div className="news-detail-form">
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
              {!saved ? <button id="bookmark-btn" className="btn btn-small waves-effect waves-light blue-grey left" type="submit">
                Bookmark
                <i className="material-icons right">bookmark</i>
              </button> 
              :
              <button id="bookmark-btn" className="btn btn-small blue-grey left disabled" type="submit">
                Saved
                <i className="material-icons right">check_box</i>
              </button> 
              }
            </form>
          </div>
      )
    }
    
  }
}



export default connect(null, {saveArticle})(SaveArticleForm)