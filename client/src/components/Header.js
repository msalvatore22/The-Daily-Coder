import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent(){
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Login with google</a></li>
        )
      default:
      return <li><a href="/api/logout">logout</a></li>
    }
  }
  
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue-grey">
          <Link 
            to={this.props.auth ? '/newsfeed' : '/'}
            className="left brand-logo"
          >
            The Daily Coder
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);