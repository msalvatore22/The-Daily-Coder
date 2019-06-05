const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const axios = require('axios');

module.exports = (app) => {
  app.get('/api/news', async (req, res) => {
    const newsData = await axios.get(`https://newsapi.org/v2/top-headlines?sources=ars-technica,business-insider,engadget,ign,mashable,new-scientist,next-big-future,recode,techcrunch,techradar,the-next-web,the-verge,wired&language=en&apiKey=${keys.newsAPI}`)

    res.send(newsData.data.articles);

  })

  app.post('/api/news', async (req, res) => {
    const {topic} = req.body

    const newsData = await axios.get(`https://newsapi.org/v2/everything?q=${topic}&sources=ars-technica,business-insider,engadget,ign,mashable,new-scientist,next-big-future,recode,techcrunch,techradar,the-next-web,the-verge,wired&language=en&apiKey=${keys.newsAPI}`)
    
    console.log(newsData.data.totalResults)
    res.send(newsData.data.articles);
    
  })

}
