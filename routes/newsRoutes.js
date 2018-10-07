const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const axios = require('axios');

module.exports = (app) => {
  app.get('/api/news', requireLogin, async (req, res) => {
    const newsData = await axios.get(`https://newsapi.org/v2/everything?q=Software&from=2018-09-18&sortBy=popularity&apiKey=${keys.newsAPI}`)
  
    res.send(newsData.data.articles);
  })

}
