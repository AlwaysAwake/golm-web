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
      }));
    }
  }
  render() {
    return (
      <div className="container">
        <input ref="email" type="email" />
        <input ref="pass" type="password" />
        <div className="button-wrapper">
          <button onClick={() => this.onClickSignin()}>Signin</button>
        </div>
      </div>
    );
  }
}

export default connect()(Signin);
