import React from "react";
import Modal from './Modal'


const NewsListItem = (props) => { 
    const onArticleSelect = props.onArticleSelect
    const article = props.article
    const selectedArticle = props.selectedArticle
    return (
      <div>
        <div onClick={() => onArticleSelect(article)} className="modal-trigger row news-list-li" data-target="modal1">
          <div className="col s6 m4"><h4 className="news-list-title">{article.title}</h4></div>
          <div className="col s0 m4"><p className="article-description">{article.description}</p></div>
          <div className="col s6 m4"><img className="article-list-img" src={article.urlToImage} alt="article" /></div>
        </div>
        <Modal selectedArticle={selectedArticle} />
        
      </div>
    )
}

export default NewsListItem;