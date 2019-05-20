const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const Article = mongoose.model('articles')

module.exports = (app) => {
  app.post('/api/articles', requireLogin, (req, res) => {
    const { title, author, url, img_url } = req.body

    const article = new Article({
      title,
      author,
      url,
      img_url,
      _user: req.user.id,
      dateSaved: Date.now()
    })

   article.save((err, article) => {
      if(err){
        console.log(err)
        return res.status(403).send({status: 403, message: 'Article failed to save, or already saved'})
      }
        
      return res.status(200).send(article)
      
    })

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