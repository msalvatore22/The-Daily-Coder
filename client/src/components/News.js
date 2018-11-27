import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import SearchBar from './SearchBar'
import NewsList from './news_list'
import NewsDetail from './news_detail'

class News extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      selectedArticle: null
    }
  }
  
  componentWillMount(){
   this.props.fetchNews();
 }
 
  render(){
   return (
     <div className="row">
       <div className="col l6 offset-l3 s12">
          <SearchBar />
          <NewsDetail history={this.props.history} article={this.state.selectedArticle}/>
          <NewsList articles={this.props.news.articles}
            onArticleSelect={selectedArticle => this.setState({selectedArticle})}
          />
          
        </div>
     </div>
     
   )
 }
}

function mapStateToProps({ news }) {
 return { news }
}
export default connect(mapStateToProps, actions)(News)