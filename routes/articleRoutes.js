const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const Article = mongoose.model('articles')

module.exports = (app) => {
  app.post('/api/articles', requireLogin, async (req, res) => {
    const { title, author, url, img_url } = req.body
    var today = new Date();
    var dd = today.getDate();
    
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = mm+'-'+dd+'-'+yyyy;

    const article = new Article({
      title,
      author,
      url,
      img_url,
      _user: req.user.id,
      dateSaved: today
    })

    await article.save((err, article) => {
      if(err){
        console.log(err)
        return res.status(400).send({status: 400, message: 'Article failed to save, or already saved'})
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
        message: 'Article successfully deleted'
      }

      return res.status(200).send(response)
    })
  })

};