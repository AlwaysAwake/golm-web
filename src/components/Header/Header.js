import React, { PropTypes, Component } from 'react';


class Header extends Component {
  onClickLink(e, redirectAddress) {
    e.preventDefault();
    this.context.router.push(`/${redirectAddress}`);
  }

  onClickSignout() {

  }

  render() {
    return (
      <nav className="navbar navbar-fixed-top" style={{ backgroundColor: '#7ed2e9' }}>
        <a onClick={(e) => this.onClickLink(e, '')} href="#" className="navbar-brand">GOLM</a>
        <ul className="nav navbar-nav pull-sm-right">
          <li className="nav-item">
            <a onClick={(e) => this.onClickLink(e, 'signin')} href="#" className="nav-link">Sign in</a>
          </li>
          <li className="nav-item">
            <a onClick={(e) => this.onClickLink(e, 'signup')} href="#" className="nav-link">Sign up</a>
          </li>
        </ul>
      </nav>
    );
  }
}

Header.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Header;
