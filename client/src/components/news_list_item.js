import React from "react";

const NewsListItem = ({article, onArticleSelect}) => {
  return (
    <li id="news-list-li" onClick={() => onArticleSelect(article)}>
      <img className="article-list-img" src={article.urlToImage} alt="article" />
      <p>{article.title}</p>
    </li>
  )
}

export default NewsListItem;