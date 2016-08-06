import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';

import { validateEmail } from '../../utils/validator';


class Signup extends Component {
  onClickSignup() {
    const { dispatch } = this.props;
    const emailRef = this.refs.email.value;
    const passRef = this.refs.pass.value;
    const nicknameRef = this.refs.nickname.value;
    const phoneRef = this.refs.phone.value;

    if (validateEmail(emailRef) && passRef !== '' && nicknameRef !== '' && phoneRef !== '') {
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
      <div className="container">
        <input ref="email" type="email" />
        <input ref="pass" type="password" />
        <input ref="nickname" />
        <input ref="phone" />
        <div className="button-wrapper">
          <button onClick={() => this.onClickSignup()}>Signup</button>
        </div>
      </div>
    );
  }
}

export default connect()(Signup);
