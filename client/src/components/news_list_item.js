import React from "react";

const NewsListItem = ({article, onArticleSelect}) => {
  return (
    <li onClick={() => onArticleSelect(article)}>
      <img className="article-list-img" src={article.urlToImage}/>
      <p>{article.title}</p>
    </li>
  )
}

export default NewsListItem;