import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";
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
  
  componentDidMount(){
   this.getNews() 
  }

 async getNews() {
   await this.props.fetchNews()
   this.setState({
     selectedArticle: this.props.news.firstArticle
   })
 }

  async handleSearch(data) {
   await this.props.searchNews(data)
   this.setState({
     selectedArticle: this.props.news.firstArticle
   })
 }
 
  render(){
   return (
     <div className="row">
       <div className="col s12">
          <SearchBar handleSearchData={this.handleSearch.bind(this)} />
          <NewsDetail history={this.props.history} article={this.state.selectedArticle} firstArticle={this.props.news.firstArticle} />
          <div className="col l7 offset-l5 s4 offset-s8">
            <NewsList articles={this.props.news.articles}
              onArticleSelect={selectedArticle => this.setState({selectedArticle})}
              selectedArticle={this.state.selectedArticle}
            />
          </div>
        </div>
     </div> 
   )
 }
}

function mapStateToProps({news}) {
 return {news}
}
export default connect(mapStateToProps, actions)(News)