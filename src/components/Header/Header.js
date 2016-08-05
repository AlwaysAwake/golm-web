import React, { PropTypes, Component } from 'react';


class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-inverse">
        <a href="#" className="navbar-brand">GOLM</a>
        <ul className="nav navbar-nav">
        </ul>
      </nav>
    );
  }
}

Header.propTypes = {

};

export default Header;
