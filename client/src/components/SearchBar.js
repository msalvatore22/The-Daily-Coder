import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {
  renderField(field){
    return (
      <div className="row search-bar hide-on-large-only">
        <div className="input-field col m8 offset-m1 s8">
          <i className="material-icons prefix">search</i>
          <input
            id="icon_prefix" 
            type="text"
            {...field.input}
          />
          <label htmlFor="icon_prefix">{field.label}</label>
        </div>
        <div className="col l2 s2 m2">
          <button className="btn waves-effect waves-light blue-grey search-btn" type="submit">
            Search
            <i className="material-icons right">search</i>
          </button>
        </div>
      </div>
    )
  }

  onSubmit(values){
    this.props.handleSearchData(values)
    this.props.change('topic', null)
  }

  
  render(){
    
    const { handleSubmit } = this.props;

    return (
      <div className="row">
        <form className="col s12 search-bar" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field 
            label="Search Topics"
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
})(SearchBar);