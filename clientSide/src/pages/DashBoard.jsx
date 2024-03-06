// Dashboard.js

import React from 'react';
import LeetCodeProfile from './LeetCodeProfile';
import CodeChefProfile from './CodeChefProfile';
import HackerRankProfile from './HackerRankProfile';
import './Dashboard.css'
import GeeksforGeeksProfile from './GeeksforGeeksProfile';
import CodingNinjasProfile from './CodingNinjasProfile';
const Dashboard = () => {
  const leetCodeUsername = 'vishal_2304';
  const codeChefUsername = 'lagreat2304';

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="profile-section">
        <LeetCodeProfile username={leetCodeUsername} />
        <CodeChefProfile username={codeChefUsername} />
        
        {/* <HackerRankProfile username={"HARI_PRASAD_2003"}/>
        <GeeksforGeeksProfile username={"HARI_PRASAD_2003"}/>
        <CodingNinjasProfile username={"Hari_Prasad"}/> */}
      </div>
    </div>
  );
};

export default Dashboard;
