// GeeksforGeeksProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GeeksforGeeksProfile = ({ username }) => {
  const [contributions, setContributions] = useState(null);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3001/scrapeGeeksforGeeks/${username}`;
        const response = await axios.get(url);
        console.log(response.data);
        setContributions(response.data.contributions);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="profile">
      <h2 className="profile-title">GeeksforGeeks Profile</h2>
      {contributions !== null ? (
        <p className="profile-info">Contributions: {contributions}</p>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
      {articles !== null ? (
        <p className="profile-info">Articles: {articles}</p>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  );
};

export default GeeksforGeeksProfile;
