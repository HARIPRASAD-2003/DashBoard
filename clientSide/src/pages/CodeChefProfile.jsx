// CodeChefProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CodeChefProfile = ({ username }) => {
  const [solvedCount, setSolvedCount] = useState(null);
  const [star, setStar] = useState(null);
    const [division, setDivision] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3001/scrapeCodeChef/${username}`;
        const response = await axios.get(url);
        setSolvedCount(response.data.solvedCount);
        setStar(response.data.star);
        setDivision(response.data.division);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="profile">
      <h2 className="profile-title">CodeChef Profile</h2>
      {division !== null ? (
        <p className="profile-info">CodeChef Division: {division}</p>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
      {solvedCount !== null ? (
        <p className="profile-info">CodeChef Rating: {solvedCount}</p>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
      {star !== null ? (
        <p className="profile-info">CodeChef Stars: {star}</p>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  );
};

export default CodeChefProfile;
