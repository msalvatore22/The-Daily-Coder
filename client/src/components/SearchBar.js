import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { searchNews } from '../actions';

class SearchBar extends Component {
  renderField(field){
    return (
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">search</i>
          <input
            id="icon_prefix" 
            type="text"
            {...field.input}
          />
          <label for="icon_prefix">{field.label}</label>
          <button className="btn waves-effect waves-light blue-grey search-btn" type="submit">
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    )
  }

  onSubmit(values){
    this.props.searchNews(values)
    this.props.change('topic', null)
  }

  
  render(){
    
    const { handleSubmit } = this.props;

    return (
      <div className="row">
        <form className="col s12 search-bar" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field 
            label="Search News Topics"
            name="topic"
            component={this.renderField}
          />
        </form>
      </div>

  )}

}

function validate(values){
  const errors = {}

  if(!values.topic){
    errors.topic = "Search a topic"
  }

  return errors;
}



export default reduxForm({
  validate,
  form: 'SearchBar'
})(
  connect(null, {searchNews})(SearchBar)
);