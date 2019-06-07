import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';
import * as actions from "../actions";
import SearchBar from './SearchBar'
import NewsList from './news_list'

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

  renderPageButtons(){
    let buttons = []
    let topic = this.props.news.topic.topic
    let pages = this.props.news.pages
    for(let i = 0; i < pages; i++){
      let data = { topic: topic, page: i+1}
      buttons.push(
        <button style={{margin: '10px'}} className="btn btn-small waves-effect waves-light blue-grey" onClick={() => this.handleSearch(data)} key={i+1}>{i+1}</button>
      )
    } 
    return buttons
  }
 
  render(){
    let topic = this.props.news.topic.topic
   return (
     <div className="row">
       <div className="col s12">
          <SearchBar handleSearchData={this.handleSearch.bind(this)} />
          <h4>{!topic ? '' : 'Results for ' +'"' + topic + '"'}</h4>
          <NewsList 
            articles={this.props.news.articles}
            onArticleSelect={selectedArticle => this.setState({selectedArticle})}
            selectedArticle={this.state.selectedArticle}
          /> 
        </div>
        <div style={{textAlign: 'center'}} className="col s12">
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