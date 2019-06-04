const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const Article = mongoose.model('articles')

module.exports = (app) => {
  app.post('/api/articles', requireLogin, async (req, res) => {

    const article = new Article({
      ...req.body,
      _user: req.user._id,
      dateSaved: Date.now()
    })

    try {
      await article.save()
      res.status(201).send(article)
    } catch (e) {
      res.status(400).send({e, message: 'Article failed to save'})
    }

  });

  app.get('/api/articles', requireLogin, async (req, res) => {
    try {
      const articles = await Article.find({ _user: req.user._id })
      res.send(articles)
    } catch (e) {
      res.status(500).send(e)
    }
  })

  app.get('/api/articles/:id', requireLogin, async (req, res) => {
    const _id = req.params.id

    try {
      const article = await Article.findOne({ _id, _user: req.user._id})

      if(!article){
        return res.status(404).send()
      }

      res.send(article)
    } catch (e) {
      res.status(500).send()
    }
  })

  app.delete('/api/articles/:id', requireLogin, async (req, res) => {
    const _id = req.params.id
    
    try {
      const article = await Article.findOneAndDelete({_id, _user: req.user._id})
      
      if(!article){
        return res.status(404).send()
      }

      res.send(article)
    } catch (e) {
      rest.status(500).send()
    }
  })
};