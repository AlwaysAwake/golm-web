import React, { PropTypes } from 'react';


const tabItems = ['normal', 'premium'];

const CardContainerTab = (props) => {
  return (
    <div className="card-container-tab">
      { tabItems.map((tab, idx) => {
        return (
          <div key={idx} onClick={() => props.onClick(tab)} className={`card-container-tab-item ${props.selectedTab === tab ? 'active' : ''}`}>
            {tab.toUpperCase()}
          </div>
        );
      }) }
    </div>
  );
};

CardContainerTab.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};

export default CardContainerTab;
