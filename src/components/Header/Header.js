import React, { PropTypes, Component } from 'react';


class Header extends Component {
  onClickMain(e) {
    e.preventDefault();
    this.context.router.push('/');
  }

  onClickSignin(e) {
    e.preventDefault();
    this.context.router.push('/signin');
  }

  onClickSignup(e) {
    e.preventDefault();
    this.context.router.push('/signup');
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-inverse">
        <a onClick={(e) => this.onClickMain(e)} href="#" className="navbar-brand">GOLM</a>
        <ul className="nav navbar-nav pull-sm-right">
          <li className="nav-item">
            <a onClick={(e) => this.onClickSignin(e)} href="#" className="nav-link">Sign in</a>
          </li>
          <li className="nav-item">
            <a onClick={(e) => this.onClickSignup(e)} href="#" className="nav-link">Sign up</a>
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
