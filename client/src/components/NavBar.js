import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from "../actions";
import M from "materialize-css/dist/js/materialize.min.js";
import NavSearchBar from './NavSearchBar'

class NavBar extends Component {
  componentDidMount(){
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
        edge: "right",
        inDuration: 250
      });
  }

  async handleSearch(data) {
    await this.props.searchNews(data)
    this.props.history.push({
      pathname: '/'
    })
  }
  
  renderContent(){
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google"><i className="material-icons right">input</i>LOGIN</a></li>
        )
      default:
      return (
        <div>
          <li><Link to={'/articles'} ><i className="material-icons right">collections_bookmark</i>BOOKMARKS</Link></li>
          <li><a href="/api/logout"><i className="material-icons right">power_settings_new</i>LOGOUT</a></li>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue-grey">
            <Link 
              to={'/'}
              className="center brand-logo"
            >
              THE DAILY CODER
            </Link>
            <a data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            
            <ul className="right hide-on-med-and-down">
              {this.renderContent()} 
            </ul>
            <ul className="hide-on-med-and-down">
              <NavSearchBar handleSearchData={this.handleSearch.bind(this)} />
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile">
          {this.renderContent()}
        </ul>
     </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(NavBar);