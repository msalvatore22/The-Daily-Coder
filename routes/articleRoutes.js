const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const Article = mongoose.model('articles')

module.exports = (app) => {
  app.post('/api/articles', requireLogin, async (req, res) => {

    const article = new Article({
      ...req.body,
      _user: req.user.id,
      dateSaved: Date.now()
    })

    try {
      await article.save()
      res.status(201).send(article)
    } catch (e) {
      res.status(400).send({e, message: 'Article failed to save'})
    }

  });

  app.get('/api/articles', requireLogin, (req, res) => {
    Article.find({_user: req.user.id}).then(function (articles, err){
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

  app.delete('/api/articles/:id', requireLogin, (req, res) => {
   Article.findByIdAndDelete({_id: req.params.id }, function(err, article){
      if(err){
        return res.status(500).send(err)
      }
      const response = {
        message: 'Article successfully deleted'
      }

      return res.status(200).send(response)
    })
  })

};