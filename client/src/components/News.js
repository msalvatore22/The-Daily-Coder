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
   console.log(data)
 }

  renderPageButtons(){
    let buttons = []
    let topic = this.props.news.topic.topic
    let pages = this.props.news.pages
    for(let i = 0; i < pages; i++){
      let data = { topic: topic, page: i+1}
      buttons.push(
        <button onClick={() => this.handleSearch(data)} key={i+1}>{i+1}</button>
      )
    } 
    return buttons
  }
 
  render(){
   return (
     <div className="row">
       <div className="col s12">
          <SearchBar handleSearchData={this.handleSearch.bind(this)} />
          <h4>{!this.props.news.topic.topic ? '' : 'Results for ' +'"' + this.props.news.topic.topic + '"'}</h4>
          <NewsList 
            articles={this.props.news.articles}
            onArticleSelect={selectedArticle => this.setState({selectedArticle})}
            selectedArticle={this.state.selectedArticle}
          />
          {this.renderPageButtons()}
        </div>
     </div> 
   )
 }
}

function mapStateToProps({news}) {
  return {news}
}
export default connect(mapStateToProps, actions)(News)