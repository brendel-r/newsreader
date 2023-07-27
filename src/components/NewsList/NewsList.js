import React, { useState, useEffect, useRef } from 'react';
import ArticleDetail from '../ArticleDetail/ArticleDetail';
import SearchBar from '../SearchBar/SearchBar';
import './NewsList.css';
import fetchArticles from '../../../src/apiCall/apiCall';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false); // State to track search activity
  const [error, setError] = useState(false); // State to track if there's an error

  useEffect(() => {
    fetchArticlesData(); // Fetch articles using the API function
  }, []);

  // Function to fetch articles using the API function
  const fetchArticlesData = async () => {
    const articlesData = await fetchArticles();
    setArticles(articlesData);
    setFilteredArticles(articlesData); // Initialize filtered articles with all articles
  };

  // Function to handle when an article is clicked
  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setIsSearchActive(true); // Set search activity to true when selecting an article
  };

  // Function to handle search and filter articles based on the search term
  const handleSearch = (searchTerm) => {
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length === 0) {
      setError(true);
      setIsSearchActive(false);
      setFilteredArticles(articles);
    } else {
      setError(false);
      setFilteredArticles(filtered);
      setIsSearchActive(true);
    }
  };

  const handleBack = () => {
    setSelectedArticle(null);
    setIsSearchActive(false);
    setFilteredArticles(articles);
    setError(false);
  };

  // Function to handle when the search input field is clicked
  const handleInputClick = () => {
    setError(false); // Clear the error when clicking on the input field
    if (inputRef.current) {
      inputRef.current.value = ''; // Clear the search input text
    }
  };

  // Function to format the date to "mmm dd, yyyy" format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const inputRef = useRef(null); // Create a ref for the search input field

  return (
    <div className="news-list-container">
      {selectedArticle ? (
        <ArticleDetail article={selectedArticle} onBack={handleBack} />
      ) : (
        <>
          <SearchBar onSearch={handleSearch} ref={inputRef} onClick={handleInputClick} />
          {isSearchActive && (
            <button onClick={handleBack} className="back-button">Back</button>
          )}
          {error && <p style={{ color: 'red' }}>No articles found matching your search term.</p>}
          <div className="article-list">
            {filteredArticles.map((article) => (
              <div
                key={article.title}
                onClick={() => handleArticleClick(article)}
                className="article-item"
              >
                <h3>{article.title}</h3>
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
                {article.description && <p>{article.description}</p>}
                <p>{formatDate(article.publishedAt)}</p> {/* Format the date */}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default NewsList;
