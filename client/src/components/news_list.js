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
    <ul className="news-list">
      
        
        {articles}
        

    </ul>
    
  )
}
 export default NewsList;