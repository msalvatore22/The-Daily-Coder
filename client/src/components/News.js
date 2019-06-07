import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";
import SearchBar from './SearchBar'
import NewsList from './news_list'

class News extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      selectedArticle: null,
      activePage: 1
    }

  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  handleSearch(data) {
   this.props.searchNews(data)
   this.setState({
     activePage: data.page
   })
 }

  renderPageButtons(){
    let topic = this.props.news.topic.topic
    let pages = this.props.news.pages
    let pagesArray = Array.from(Array(pages), (x, index) => index + 1)

    let pageButtons = pagesArray.map(btn => {
      let data = { topic: topic, page: btn}
      if(this.state.activePage === btn){
        return <li className="active blue-grey" onClick={() => this.handleSearch(data)} key={btn}><a href="#!">{btn}</a></li>
      } else {
        return <li className="waves-effect" onClick={() => this.handleSearch(data)} key={btn}><a href="#!">{btn}</a></li>
      }
    })
    
    return pageButtons
  }
 
  render(){
    let topic = this.props.news.topic.topic
    let total = this.props.news.total
   return (
     <div className="row">
       <div className="col s12">
          <SearchBar handleSearchData={this.handleSearch.bind(this)} />
          <h4>{!topic ? '' : total + ' results for ' +'"' + topic + '"'}</h4>
          <NewsList 
            articles={this.props.news.articles}
            onArticleSelect={selectedArticle => this.setState({selectedArticle})}
            selectedArticle={this.state.selectedArticle}
          /> 
        </div>
        <div style={{textAlign: 'center'}} className="col s12">
          <ul className="pagination">
            {this.renderPageButtons()}
          </ul> 
        </div>
     </div> 
   )
 }
}

function mapStateToProps({news}) {
  return {news}
}
export default connect(mapStateToProps, actions)(News)