import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
import * as actions from "../actions";
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import SearchBar from './SearchBar'

class News extends Component {
  componentWillMount(){
    this.props.fetchNews();
  }

  renderField(field) {
    return (
    <div className="input-field col s12">
      <input
        id="article-field" 
        type="text"
        {...field.input}
      />
      <label htmlFor="article-field">{field.label}</label>
    </div>
    )
  }

  onSubmit(values){
    this.props.saveArticle(values)
  }

  renderNews(){
    return _.map(this.props.news, article => {
    
    this.props.initialize({
      "title": article.title,
      "author": article.author,
      "url": article.url,
      "img_url": article.urlToImage
    })

    const { handleSubmit } = this.props;
    
    return (
        <div key={article.title} style={{ textAlign: 'center'}}>
          <img className="article-img" src={article.urlToImage}/>
         <Collapsible className="blue-grey lighten-5">
          <CollapsibleItem header={article.title}>
            <div style={{ textAlign: 'center'}}>
            <p>{article.author}</p>
            <p>{article.description}</p>
            <a target="_blank" href={article.url}>Full Story Here</a>
            </div>
          </CollapsibleItem>
        </Collapsible>
        
        <form className="col s12 search-bar" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field 
            label="title"
            name="title"
            component={this.renderField}
          />
          <Field 
            label="author"
            name="author"
            component={this.renderField}
          />
          <Field 
            label="url"
            name="url"
            component={this.renderField}
          />
          <Field 
            label="imgURL"
            name="img_url"
            component={this.renderField}
          />
          <button className="btn waves-effect waves-light blue-grey search-btn" type="submit">
            Save Article
            <i className="material-icons right">send</i>
          </button>
        </form>

        </div>
     )
   })
 }
  render(){

    return (
     <div className="row">
       <div className="col l6 offset-l3 s12">
          <SearchBar />
          
            {this.renderNews()}
          
        </div>
     </div>
     
   )
 }
}

function validate(values){
  const errors = {}

  if(!values.author){
    errors.author = "Error"
  }

  if(!values.title){
    errors.title = "Error"
  }

  if(!values.url){
    errors.url = "Error"
  }

  if(!values.img_url){
    errors.img_url = "Error"
  }

  return errors;
}

function mapStateToProps({ news }) {
 return { news }
}

export default reduxForm({
  enableReinitialize: true,
  validate,
  form: 'SaveArticle'
})(
  connect(mapStateToProps, actions)(News)
);