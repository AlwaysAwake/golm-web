import React, { PropTypes, Component } from 'react';

import { Swiper } from '../../components';


class Main extends Component {
  render() {
    return (
      <div className="container">
        <Swiper />
      </div>
    );
  }
}

Main.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Main;
