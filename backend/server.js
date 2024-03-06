const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors());

app.get('/scrapeLeetCode/:username', async (req, res) => {
  const username = req.params.username;

  try {
    const url = `https://leetcode.com/${username}/`;
    const response = await axios.get(url);

    const $ = cheerio.load(response.data);
    const htmlContent = $.html();

    const doc = new dom().parseFromString(htmlContent);
    const select = xpath.useNamespaces({ 'html': 'http://www.w3.org/1999/xhtml' });

    const solvedCountElement = select('//*[@id="__next"]/div[1]/div[4]/div/div[2]/div[3]/div[1]/div/div[2]/div[1]/div/div/div/div[1]', doc);
    const solvedCount = solvedCountElement.toString().split(">")[1].split("<")[0];
    console.log(solvedCount)

    const contestRating = select('//*[@id="__next"]/div[1]/div[4]/div/div[2]/div[2]/div[1]/div/div[1]/div/div[1]/div[2]', doc);
    const rating = contestRating.toString().split(">")[1].split("<")[0];
    res.json({
      username,
      solvedCount,
      rating,
    });
  } catch (error) {
    // console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/scrapeCodeChef/:username', async (req, res) => {
    const username = req.params.username;
  
    try {
      const url = `https://www.codechef.com/users/${username}/`;
      const response = await axios.get(url);
  
      const $ = cheerio.load(response.data);
      const htmlContent = $.html();
  
      const doc = new dom().parseFromString(htmlContent);
      const select = xpath.useNamespaces({ 'html': 'http://www.w3.org/1999/xhtml' });
  
      const solvedCountElement = select('/html/body/main/div/div/div/aside/div[1]/div/div[1]/div[1]', doc);
      const solvedCount = solvedCountElement.toString().split(">")[1].split("<")[0];

      const starElement = select('/html/body/main/div/div/div/div/div/section[1]/ul/li[1]/span/span[1]', doc);
      const star = starElement.toString().split(">")[1].split("<")[0];

      const divisionElement = select('/html/body/main/div/div/div/aside/div[1]/div/div[1]/div[2]', doc);
      const division = divisionElement.toString().split("(")[1].split(")")[0]
      console.log(solvedCount)
      res.json({
        username,
        solvedCount,
        star,
        division,
      });
    } catch (error) {
    //   console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.get('/scrapeCodingNinjas/:username', async (req, res) => {
    const username = req.params.username;
  
    try {
      const url = `https://www.codingninjas.com/studio/profile/${username}/`;
      const response = await axios.get(url);
  
      const $ = cheerio.load(response.data);
  
      // Assuming the class names for username, adjust if needed.
      const usernameElement = $('.user-profile-name-container'); 
      const usernameText = usernameElement.text().trim();
  
      console.log('Coding Ninjas Username:', usernameElement.text());
  
      res.json({
        username: usernameText,
      });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  


  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  