// CodingNinjasProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CodingNinjasProfile = ({ username }) => {
  const [points, setPoints] = useState(null);
  const [rank, setRank] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3001/scrapeCodingNinjas/${username}`;
        const response = await axios.get(url);
        console.log(response.data);
        setPoints(response.data.points);
        setRank(response.data.rank);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="profile">
      <h2 className="profile-title">Coding Ninjas Profile</h2>
      {points !== null ? (
        <p className="profile-info">Points: {points}</p>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
      {rank !== null ? (
        <p className="profile-info">Rank: {rank}</p>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  );
};

export default CodingNinjasProfile;
