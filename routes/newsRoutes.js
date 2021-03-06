const keys = require('../config/keys');
const axios = require('axios');

module.exports = (app) => {
  app.get('/api/news', async (req, res) => {
    const newsData = await axios.get(`https://newsapi.org/v2/top-headlines?sources=ars-technica,business-insider,engadget,ign,mashable,new-scientist,next-big-future,recode,techcrunch,techradar,the-next-web,the-verge,wired&language=en&apiKey=${keys.newsAPI}`)

    res.send(newsData.data.articles);

  })

  app.post('/api/news', async (req, res) => {
    const {topic, page} = req.body

    const newsData = await axios.get(`https://newsapi.org/v2/everything?q=${topic}&sources=ars-technica,business-insider,engadget,ign,mashable,new-scientist,next-big-future,recode,techcrunch,techradar,the-next-web,the-verge,wired&language=en&apiKey=${keys.newsAPI}&page=${page}`)
    
    let pages
    let total = newsData.data.totalResults
    if(total > 100){
      pages = 5
      total = 100
    } else {
      pages = Math.ceil(total / 20)
    }

    res.send({articles: newsData.data.articles, pages: pages, total: total});
    
  })

}
