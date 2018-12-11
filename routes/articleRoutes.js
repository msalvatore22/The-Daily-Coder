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
      console.log(err)
    })

    const user = await req.user.save()

    res.send(user)

  });

  app.get('/api/articles', requireLogin, (req, res) => {
    Article.find({}).then(function (articles){
      
      res.send(articles)
    })
  })

  app.get('/api/articles/:id', requireLogin, (req, res) => {

    Article.findById(req.params.id).then(article => {
      res.send(article)
    })
  })

  app.delete('/api/articles/:id', requireLogin, (req, res) => {
    Article.findByIdAndDelete({_id: req.params.id }, function(err){
      if(err){
        alert("something bad happened")
      }else{
        console.log("article deleted")
      }
    })
  })

};