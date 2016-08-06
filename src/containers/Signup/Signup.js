import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';

import { validateEmail } from '../../utils/validator';


class Signup extends Component {
  onClickSignup() {
    const { dispatch } = this.props;
    const emailRef = this.refs.email.value;
    const passRef = this.refs.pass.value;
    const passConfirmRef = this.refs.passConfirm.value;
    const nicknameRef = this.refs.nickname.value;
    const phoneRef = this.refs.phone.value;

    if (validateEmail(emailRef) && passRef !== '' && nicknameRef !== '' && phoneRef !== '' && passRef === passConfirmRef) {
      dispatch(Actions.signUp({
        user: {
          email: emailRef,
          password: passRef,
          nickname: nicknameRef,
          phone: phoneRef,
        },
      }));
    }
  }
  render() {
    return (
      <div className="container signup-container">
        <h2 className="text-center">GOLM 회원가입</h2>
        <h4 className="text-center">환영합니다! 지금 바로 GOLM의 회원이 되어보세요!</h4>
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
          <div className="row">
            <div className="col-sm-6 text-right">
              <h5>Password Confirm :</h5>
            </div>
            <div className="col-sm-6">
              <input ref="passConfirm" type="password" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 text-right">
              <h5>Nickname :</h5>
            </div>
            <div className="col-sm-6">
              <input ref="nickname" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 text-right">
              <h5>Phone :</h5>
            </div>
            <div className="col-sm-6">
              <input ref="phone" type="text" />
            </div>
          </div>
        </div>
        <div className="button-wrapper text-center">
          <img onClick={() => this.onClickSignup()} src="https://s3.ap-northeast-2.amazonaws.com/leefwangbucket/gokathon/images/create_account_b.png" role="presentation" />
        </div>
      </div>
    );
  }
}

export default connect()(Signup);
