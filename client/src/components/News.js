import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import SearchBar from './SearchBar'

class News extends Component {
 componentWillMount(){
   this.props.fetchNews();
 }
  renderNews(){
   return _.map(this.props.news, article => {
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

function mapStateToProps({ news }) {
 return { news }
}
export default connect(mapStateToProps, actions)(News)