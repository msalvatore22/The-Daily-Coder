import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NavSearchBar extends Component {
  renderField(field){
    return (
      <input id="search" type="search" placeholder="SEARCH NEWS" {...field.input} required></input>
    )
  }
  
  onSubmit(values){
    this.props.handleSearchData(values)
    this.props.change('topic', null)
  }
  render(){

    const { handleSubmit } = this.props;
    
    return (
      <li>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="input-field left">
            <Field 
              label="Search Topics"
              name="topic"
              component={this.renderField}
            />
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </li>
    )
  }
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
  form: 'NavSearchBar'
})(NavSearchBar);