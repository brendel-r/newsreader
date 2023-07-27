// import React from 'react';
// import './ArticleDetail.css';

// const ArticleDetail = ({ article, onBack }) => {
//   return (
//     <div className="article-detail-container">
//       <button onClick={onBack}>Back to List</button>
//       <h2>{article.title}</h2>
//       {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
//       <p>{article.publishedAt}</p>
//       <div className="article-content">
//         <p>{article.content}</p>
//       </div>
//       <p>Source: {article.source.name}</p>
//     </div>
//   );
// };

// export default ArticleDetail;
import React from 'react';

const ArticleDetail = ({ article, onBack }) => {
  // Function to format the date to "mmm dd, yyyy" format
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
