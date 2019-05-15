import React, { Component } from "react";
import Modal from './modal'


class NewsListItem extends Component { 

  render(){
    const onArticleSelect = this.props.onArticleSelect
    const article = this.props.article
    const selectedArticle = this.props.selectedArticle
    return (
      <div>
        <div onClick={() => onArticleSelect(article)} className="modal-trigger row news-list-li" data-target="modal1">
          <div className="col s4"><h4 className="news-list-title">{article.title}</h4></div>
          <div className="col s4"><p>{article.description}</p></div>
          <div className="col s4"><img className="article-list-img" src={article.urlToImage} alt="article" /></div>
        </div>
        <Modal selectedArticle={selectedArticle} />
        
      </div>
    )
  }
}

export default NewsListItem;