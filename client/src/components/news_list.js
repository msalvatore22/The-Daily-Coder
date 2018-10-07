import React from 'react';
import NewsListItem from './news_list_item';

const NewsList = (props) => {
  const articles = props.articles.map((article) => {
    return <NewsListItem 
    onArticleSelect={props.onArticleSelect}
    key={article.title}
    article={article}
    
    />
    
  });

  return (
    <div className="col s3">
      <ul>
        {articles}
      </ul>
    </div>
    
  )
}

export default NewsList;