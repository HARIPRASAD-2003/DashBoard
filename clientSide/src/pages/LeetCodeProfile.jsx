// LeetCodeProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeetCodeProfile = ({ username }) => {
  const [solvedCount, setSolvedCount] = useState(null);
  const [rating, setRating] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3001/scrapeLeetCode/${username}`;
        const response = await axios.get(url);
        setSolvedCount(response.data.solvedCount);
        setRating(response.data.rating);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="profile">
      <h2 className="profile-title">LeetCode Profile</h2>
      {solvedCount !== null ? (
        <p className="profile-info">Solved Problems: {solvedCount}</p>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
      {solvedCount !== null ? (
        <p className="profile-info">Contest Rating: {rating}</p>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
      {/* {solvedCount !== null ? (
        <p className="profile-info">Solved Problems: {solvedCount}</p>
      ) : (
        <p className="loading-message">Loading...</p>
      )} */}
    </div>
  );
};

export default LeetCodeProfile;
