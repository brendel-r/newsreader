import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleDetail from '../ArticleDetail/ArticleDetail';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const apiKey = 'f1f90d2a47d841739975b3725cda755a';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div>
      {selectedArticle ? (
        <ArticleDetail article={selectedArticle} />
      ) : (
        articles.map((article) => (
          <div key={article.title} onClick={() => handleArticleClick(article)}>
            <h3>{article.title}</h3>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            {article.description && <p>{article.description}</p>}
            <p>{article.publishedAt}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsList;
