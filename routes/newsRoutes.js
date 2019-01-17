const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const axios = require('axios');

module.exports = (app) => {
  app.get('/api/news', async (req, res) => {
    const newsData = await axios.get(`https://newsapi.org/v2/everything?q=Software&sortBy=popularity&apiKey=${keys.newsAPI}`)
  
    res.send(newsData.data.articles);

  })

  app.post('/api/news', async (req, res) => {
    const {topic} = req.body

    const newsData = await axios.get(`https://newsapi.org/v2/everything?q=${topic}&sortBy=popularity&apiKey=${keys.newsAPI}`)
  
    res.send(newsData.data.articles);
    
  })

}
