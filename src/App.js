import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import * as Actions from "./actions/actions";
import {Header} from "./components";


class App extends Component {
  onClickSignout(e) {
    const { dispatch } = this.props;
    e.preventDefault();

    dispatch(Actions.signOut());
  }
  render() {
    return (
      <div className="expand">
        <Header username={ this.props.username } onClickSignout={(e) => this.onClickSignout(e)} />
        {this.props.children}
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
    username: users.user ? users.user.nickname : undefined
  };
};

export default connect(mapStateToProps)(App);
