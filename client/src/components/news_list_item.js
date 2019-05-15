import React, { Component } from "react";
import Modal from './modal'


class NewsListItem extends Component { 

  render(){
    const onArticleSelect = this.props.onArticleSelect
    const article = this.props.article
    const selectedArticle = this.props.selectedArticle
    return (
      <div>
        <div id="news-list-li" onClick={() => onArticleSelect(article)} className="modal-trigger" data-target="modal1">
          <img className="article-list-img" src={article.urlToImage} alt="article" />
          <p>{article.title}</p>
        </div>
        <Modal selectedArticle={selectedArticle} />
        
      </div>
    )
  }
}

export default NewsListItem;