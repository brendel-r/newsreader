import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') { // Check if the input is not blank (after removing leading/trailing spaces)
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onClick={onClick} // Add onClick handler to clear error and input text
        placeholder="Search for articles..."
        className="search-input"
      />
      <button
        onClick={handleSearch}
        className="search-button"
        disabled={searchTerm.trim() === ''} // Disable the button if input is blank
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
