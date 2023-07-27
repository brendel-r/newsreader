
import React from 'react';

const ArticleDetail = ({ article, onBack }) => {
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <button onClick={onBack} className="back-button">Back to List</button>
      <h2>{article.title}</h2>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <p>{formatDate(article.publishedAt)}</p> {/* Format the date */}
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        <p>{article.content}</p>
      </div>
      <p>Source: {article.source.name}</p>
    </div>
  );
};

export default ArticleDetail;
