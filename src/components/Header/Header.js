import React, { PropTypes, Component } from 'react';


class Header extends Component {
  onClickLink(e, redirectAddress) {
    e.preventDefault();
    this.context.router.push(`/${redirectAddress}`);
  }

  render() {
    const { username, onClickSignout } = this.props;
    return (
      <nav className="navbar" style={{ backgroundColor: '#ccc' }}>
        <a onClick={(e) => this.onClickLink(e, '')} href="#" className="navbar-brand">
          <img src="https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/logo_top.png" role="presentation" style={{ width: '130px', height: 'auto', marginLeft: '10px' }} />
        </a>
        <ul className="nav navbar-nav pull-sm-right">
          {
            username ?
              <div>
                <span style={{ display: 'block' }}>{username}님 환영합니다.</span>
                <li className="nav-item">
                  <a onClick={onClickSignout} href="#" className="nav-link">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/sign_out_bright.png" role="presentation" />
                  </a>
                </li>
              </div>
              :
              <div>
                <li className="nav-item">
                  <a onClick={(e) => this.onClickLink(e, 'signin')} href="#" className="nav-link">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/sign_in_bright.png" role="presentation" />
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={(e) => this.onClickLink(e, 'signup')} href="#" className="nav-link">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/sign_up_bright.png" role="presentation" />
                  </a>
                </li>
              </div>
          }
        </ul>
      </nav>
    );
  }
}

Header.contextTypes = {
  router: PropTypes.object.isRequired,
};

Header.propTypes = {
  username: PropTypes.string,
};

export default Header;
