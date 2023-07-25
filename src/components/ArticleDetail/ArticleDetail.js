import React from 'react';

const ArticleDetail = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <p>{article.publishedAt}</p>
      <p>{article.content}</p>
      <p>Source: {article.source.name}</p>
    </div>
  );
};

export default ArticleDetail;