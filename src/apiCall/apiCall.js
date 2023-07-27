import axios from 'axios';

const apiKey = 'f1f90d2a47d841739975b3725cda755a';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

const fetchArticles = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

export default fetchArticles;
