import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import * as Actions from "./actions/actions";
import {Header} from "./components";


class App extends Component {
  onClickSignout(e) {
    const { dispatch } = this.props;
    e.preventDefault();

    dispatch(Actions.signOut());
  }

  render() {
    const { children, location, username } = this.props;

    return (
      <div className="expand">
        <Header username={username} onClickSignout={(e) => this.onClickSignout(e)} />
        <ReactCSSTransitionGroup transitionName="container" transitionEnterTimeout={700} transitionLeaveTimeout={500}>
          { React.cloneElement(children, {
            key: location.pathname,
          }) }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired,
};

App.propTypes = {
  username: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { polls, users } = state;
  return {
    username: users.user ? users.user.nickname : undefined,
  };
};

export default connect(mapStateToProps)(App);
