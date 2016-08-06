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
      <nav className="navbar" style={{ backgroundColor: '#ccc' }}>
        <a onClick={(e) => this.onClickLink(e, '')} href="#" className="navbar-brand">
          <img src="https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/logo_top.png" role="presentation" style={{ width: '130px', height: 'auto', marginLeft: '10px' }} />
        </a>
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
