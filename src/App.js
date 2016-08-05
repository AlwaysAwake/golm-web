import React, { Component, PropTypes } from 'react';
import { Header } from './components';


class App extends Component {
  render() {
    return (
      <div className="expand">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default App;
