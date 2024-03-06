// HackerRankProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HackerRankProfile = ({ username }) => {
  const [solvedCount, setSolvedCount] = useState(null);
  const [badge, setBadge] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3001/scrapeHackerRank/${username}`;
        const response = await axios.get(url);
        console.log(response.data);
        setSolvedCount(response.data.solvedCount);
        setBadge(response.data.badge);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="profile">
      <h2 className="profile-title">HackerRank Profile</h2>
      {solvedCount !== null ? (
        <p className="profile-info">Solved Challenges: {solvedCount}</p>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
      {badge !== null ? (
        <p className="profile-info">HackerRank Badge: {badge}</p>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
      
    </div>
  );
};

export default HackerRankProfile;
