import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
  const [articles, setArticles] = useState([]);

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

  return (
    <div>
      {articles.map((article) => (
        <div key={article.title}>
          <h3>{article.title}</h3>
          {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
          {article.description && <p>{article.description}</p>}
          <p>{article.publishedAt}</p>
          {/* Link to detailed view (implement this later) */}
        </div>
      ))}
    </div>
  );
};

export default NewsList;
