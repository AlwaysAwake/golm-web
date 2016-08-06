import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';

import { validateEmail } from '../../utils/validator';


class Signin extends Component {
  onClickSignin() {
    const { dispatch } = this.props;
    const emailRef = this.refs.email.value;
    const passRef = this.refs.pass.value;

    if (validateEmail(emailRef) && passRef !== '') {
      dispatch(Actions.signIn({
        user: {
          email: emailRef,
          password: passRef,
        },
      })).then(() => this.context.router.push('/'));
    }
  }
  render() {
    return (
      <div className="container signup-container">
        <h2 className="text-center">GOLM에 로그인</h2>
        <h4 className="text-center">GOLM에 오신 것을 환영합니다!</h4>
        <div className="divider" style={{ border: '2px solid rgb(55, 58, 60)', marginBottom: '75px' }}></div>
        <div className="signup-input-wrapper">
          <div className="row">
            <div className="col-sm-6 text-right">
              <h5>Email Address :</h5>
            </div>
            <div className="col-sm-6">
              <input ref="email" type="email" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 text-right">
              <h5>Password :</h5>
            </div>
            <div className="col-sm-6">
              <input ref="pass" type="password" />
            </div>
          </div>
        </div>
        <div className="button-wrapper text-center">
          <img onClick={() => this.onClickSignin()} src="https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/sign_in_b.png" role="presentation" />
        </div>
      </div>
    );
  }
}

Signin.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect()(Signin);
