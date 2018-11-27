import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveArticle } from "../actions";
import { reduxForm, Field } from 'redux-form';

class NewsDetail extends Component { 
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.title = React.createRef()
    this.author = React.createRef()
    this.url = React.createRef()
    this.img_url = React.createRef()
  }

  handleSubmit(event){
    event.preventDefault()
    let title = this.title.current.value
    let author = this.author.current.value
    let url = this.url.current.value
    let img_url = this.img_url.current.value

    const values = {
      title,
      author,
      url,
      img_url
    }
    
    this.props.saveArticle(values, () => {
      this.props.history.push('/articles')
    })
    
  }

  
  render(){
    const article = this.props.article
    // const { handleSubmit } = this.props
    if(!article){
      return <div></div>
    } else {
      return(
        <div className="col s6 offset-s2">
          <img className="article-img" src={article.urlToImage}/>
          <h5>{article.title}</h5>
          <p>{article.author}</p>
          <p>{article.description}</p>
          <a target="_blank" href={article.url}>Full Story Here</a>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                readOnly
                label="title"
                name="title"
                type="text"
                value={article.title}
                ref={this.title}
                component='input'
              />
              <input
                readOnly
                label="author"
                name="author"
                type="text"
                value={article.author}
                ref={this.author}
                component='input'
              />
              <input
                readOnly
                label="url"
                name="url"
                type="text"
                value={article.url}
                ref={this.url}
                component='input'
              />
              <input
                readOnly
                label="img_url"
                name="img_url"
                type="text"
                value={article.urlToImage}
                ref={this.img_url}
                component='input'
              />
              <button className="btn waves-effect waves-light blue-grey search-btn" type="submit">
                Save Article
                <i className="material-icons right">send</i>
              </button>
            </form>
            
          </div>
        
        </div>
      )
    }
    
  }
}

// function validate(values){
//   const errors = {};

//   //validate the Fields from values
//   if(!values.title) {
//     errors.title = "Enter a title!"
//   }

//   if(!values.author) {
//     errors.author = "Enter a author!"
//   }

//   if(!values.url) {
//     errors.url = "Enter a url!"
//   }

//   if(!values.img_url) {
//     errors.img_url = "Enter a url!"
//   }

//   //if errors is empty, submit form
//   //if errors has any properties, redux assumes its invalid
//   return errors;
// }

// function mapStateToProps(state, props){
//   return {
//       initialValues: {
//         title: props.article.title,
//         author: props.article.author,
//         url: props.article.url,
//         img_url: props.article.urlToImage
//       }
//     }
// }


// export default reduxForm({
//   validate,
//   enableReinitialize: true,
//   form: 'SaveArticleForm'
// })(
//   connect(null, {saveArticle})(NewsDetail)
// );

export default connect(null, {saveArticle})(NewsDetail)
