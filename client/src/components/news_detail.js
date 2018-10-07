import React from 'react';

const NewsDetail = ({article}) => {
  if(!article){
    return <div></div>
  }

  return (
    <div className="col s6 offset-s2">
      <img className="article-img" src={article.urlToImage}/>
      {console.log(article)}
      <h5>{article.title}</h5>
      <p>{article.author}</p>
      <p>{article.description}</p>
      <a target="_blank" href={article.url}>Full Story Here</a>
      
    </div>
  )
}

export default NewsDetail;