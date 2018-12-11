import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";

class Header extends Component {
  componentDidMount(){
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
            edge: "right",
            inDuration: 250
        });
  }
  
  renderContent(){
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google"><i className="material-icons">lock_outline</i></a></li>
        )
      default:
      return (
        <div>
          <li><Link to={'/articles'} ><i className="material-icons">collections_bookmark</i></Link></li>
          <li><a href="/api/logout"><i className="material-icons">lock_open</i></a></li>
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
            to={this.props.auth ? '/newsfeed' : '/'}
            className="center brand-logo"
          >
            THE DAILY CODER
          </Link>
          <a href="#" data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          
          <ul className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
          <form className="hide-on-med-and-down">
            <div className="input-field" style={{maxWidth: '300px'}}>
            <input id="search" type="search" required />
            <label className="label-icon"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      
      <ul className="sidenav" id="mobile">
      <form>
            <div className="input-field" style={{maxWidth: '300px'}}>
            <input id="search" type="search" name="topic" required />
            <label className="label-icon"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
            </div>
          </form>
        {this.renderContent()}
      </ul>
     </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);