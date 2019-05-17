import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";
import SearchBar from './SearchBar'
import NewsList from './news_list'
import Header from './NavBar'

class News extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      selectedArticle: null
    }
    
  }

  handleSearch(data) {
   this.props.searchNews(data)
 }
 
  render(){
   return (
     <div className="row">
       <div className="col s12">
          <SearchBar handleSearchData={this.handleSearch.bind(this)} />
          <NewsList 
            articles={this.props.news.articles}
            onArticleSelect={selectedArticle => this.setState({selectedArticle})}
            selectedArticle={this.state.selectedArticle}
          />
        </div>
     </div> 
   )
 }
}

function mapStateToProps({news}) {
 return {news}
}
export default connect(mapStateToProps, actions)(News)