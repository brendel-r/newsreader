import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleDetail from '../ArticleDetail/ArticleDetail';
import SearchBar from '../SearchBar/SearchBar';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState([]); // State for filtered articles

  useEffect(() => {
    const apiKey = 'f1f90d2a47d841739975b3725cda755a';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {
        setArticles(response.data.articles);
        setFilteredArticles(response.data.articles); // Initialize filtered articles with all articles
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  // Function to handle when an article is clicked
  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  // Function to handle search and filter articles based on the search term
  const handleSearch = (searchTerm) => {
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} /> 
      {selectedArticle ? (
        <ArticleDetail article={selectedArticle} />
      ) : (
        filteredArticles.map((article) => (
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
