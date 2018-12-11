const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const Article = mongoose.model('articles')

module.exports = (app) => {
  app.post('/api/articles', requireLogin, async (req, res) => {
    const { title, author, url, img_url } = req.body

    const article = new Article({
      title,
      author,
      url,
      img_url,
      _user: req.user.id,
      dateSaved: Date.now()
    })

    await article.save((err) => {
      if(err){
        return res.status(500).send(err)
      }
      return res.status(200).send(article)
    })

  });

  app.get('/api/articles', requireLogin, (req, res) => {
    Article.find({}).then(function (articles, err){
      if(err) {
        return res.status(500).send(err)
      }
      return res.status(200).send(articles)
    })
  })

  app.get('/api/articles/:id', requireLogin, (req, res) => {

    Article.findById(req.params.id).then((article, err) => {
      if(err){
        return res.status(500).send(err)
      }
      return res.status(200).send(article)
    })
  })

  app.delete('/api/articles/:id', requireLogin, async (req, res) => {
    await Article.findByIdAndDelete({_id: req.params.id }, function(err, article){
      if(err){
        return res.status(500).send(err)
      }
      const response = {
        message: 'Article successfully deleted',
        id: article._id
      }

      return res.status(200).send(response)
    })
  })

};