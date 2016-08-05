import React, { PropTypes } from 'react';


const tabItems = ['normal', 'premium'];

const CardContainerTab = (props) => {
  return (
    <div className="card-container-tab">
      { tabItems.map((tab, idx) => {
        return (
          <div key={idx} className="card-container-tab-item">
            {tab}
          </div>
        );
      }) }
    </div>
  );
};

CardContainerTab.propTypes = {
  onClickTab: PropTypes.func.isRequired,
};

export default CardContainerTab;
