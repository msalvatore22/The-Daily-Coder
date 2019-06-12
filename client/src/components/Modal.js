import React, { Component } from "react";
import SaveArticleForm from './save_article_form'
import M from "materialize-css";
import { connect } from 'react-redux'

class Modal extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    const selectedArticle = this.props.selectedArticle
    if(!selectedArticle){
      return (
        <div>
  
          <div
            ref={Modal => {
              this.Modal = Modal;
            }}
            id="modal1"
            className="modal"
          >
          </div>
        </div>
      )
    } else {
      
      return (
        <div>
  
          <div
            ref={Modal => {
              this.Modal = Modal;
            }}
            id="modal1"
            className="modal"
          >
            <div className="modal-content">
              <a id="modal-close-btn" className="modal-close btn btn-small red right">
                <i className="material-icons">close</i>
              </a>
              <img className="article-img" src={selectedArticle.urlToImage} alt="article" />
              <h4>{selectedArticle.title}</h4>
              <p>{selectedArticle.author}</p>
              <p>{selectedArticle.description}</p>
            </div>
            <div className="modal-footer">
            <a target="_blank" href={selectedArticle.url}>
              <button id="url-btn" className="btn btn-small waves-effect waves-light blue-grey left">
              Full Article
              <i className="material-icons right">explore</i>
              </button>
            </a>
            {!this.props.auth ? 
              <a href="/auth/google">
              <button className="btn btn-small waves-effect waves-light blue-grey save-btn right">
                Login to bookmark
                <i className="material-icons right">input</i>
              </button>
              </a>
              :
              <SaveArticleForm selectedArticle={selectedArticle} />
            }
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps({auth}){
  return {auth}
}

export default connect(mapStateToProps, null)(Modal);