import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
var moment = require('moment');

import * as Actions from '../../actions/actions';


class PollAddView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedTab: 'normal',
      startDate: moment(),
    };
  }

  handleChange(date) {
    this.setState({ startDate: date });
  }

  componentWillMount() {
    if (!this.props.isSignedin) {
      this.context.router.push('/signin');
    }
  }

  onClickTab(selectedTab) {
    this.setState({ selectedTab });
  }

  onClickPollAdd() {
    const { dispatch, isSignedin } = this.props;
    const titleRef = this.refs.title.value;
    const descriptionRef = this.refs.description.value;
    const answerARef = this.refs.answer_A.value;
    const answerBRef = this.refs.answer_B.value;
    const imgARef = this.refs.img_A.value;
    const imgBRef = this.refs.img_B.value;
    const descriptionARef = this.refs.description_A.value;
    const descriptionBRef = this.refs.description_B.value;
    const { selectedTab, startDate } = this.state;
    let typeRef;

    const premiumFeatures = selectedTab === 'premium' ? {
      price: this.refs.price.value,
      applicant: this.refs.applicant.value,
      expired_at: startDate,
    } : {};

    if (titleRef !== '' && answerARef !== '' && answerBRef !== '' && typeRef !== '' && isSignedin) {
      dispatch(Actions.addPoll({
        title: titleRef,
        description: descriptionRef,
        answer_A: answerARef,
        answer_B: answerBRef,
        img_A: imgARef,
        img_B: imgBRef,
        description_A: descriptionARef,
        description_B: descriptionBRef,
        type: selectedTab,
        ...premiumFeatures,
      }));
    }
  }

  render() {
    const { selectedTab, startDate } = this.state;
    const types = {
      normal: '개인 사용자',
      premium: '기업 등록',
    };

    return (
      <div className="container poll-add-container">
        <div className="type-select-tab-wrapper">
        { Object.keys(types).map((type, idx) => {
          return (
            <div key={idx} onClick={() => this.onClickTab(type)} className={`type-select-tab ${selectedTab === type ? 'active' : ''}`}>
              {types[type]}
            </div>
          );
        }) }
        </div>
        <div className="poll-add-input-wrapper">
          <div className="row">
            <div className="col-sm-12" style={{ marginBottom: '10px' }}>
              <h5 style={{ display: 'inline-block', marginRight: '15px' }}>Title: </h5>
              <input className="underline-input" type="text" ref="title" />
            </div>
            <div className="col-sm-12" style={{ marginBottom: '20px' }}>
              <h5>Description :</h5>
              <textarea ref="description" rows="5" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-12" style={{ marginBottom: '25px' }}>
                  <h5>Subject&nbsp;&nbsp;&nbsp;<span style={{ fontSize: '50px' }}>A</span></h5>
                </div>
                <div className="col-sm-12" style={{ marginBottom: '10px' }}>
                  <h5>A Title</h5>
                  <input className="underline-input" type="text" ref="answer_A" />
                </div>
                <div className="col-sm-12" style={{ marginBottom: '10px' }}>
                  <h5>A Description</h5>
                  <textarea ref="description_A" rows="3" />
                </div>
                <div className="col-sm-12" style={{ marginBottom: '10px' }}>
                  <h5>A Image</h5>
                  <input className="underline-input" type="text" ref="img_A" />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-12" style={{ marginBottom: '25px' }}>
                  <h5>Subject&nbsp;&nbsp;&nbsp;<span style={{ fontSize: '50px' }}>B</span></h5>
                </div>
                <div className="col-sm-12" style={{ marginBottom: '10px' }}>
                  <h5>B Title</h5>
                  <input className="underline-input" type="text" ref="answer_B" />
                </div>
                <div className="col-sm-12" style={{ marginBottom: '10px' }}>
                  <h5>B Description</h5>
                  <textarea ref="description_B" rows="3" />
                </div>
                <div className="col-sm-12" style={{ marginBottom: '10px' }}>
                  <h5>B Image</h5>
                  <input className="underline-input" type="text" ref="img_B" />
                </div>
              </div>
            </div>
          </div>
          {
            selectedTab === 'premium' ?
            <div className="row">
              <div className="col-sm-12" style={{ marginBottom: '10px' }}>
                <h5>Price</h5>
                <input type="text" className="underline-input" ref="price" />
              </div>
              <div className="col-sm-12" style={{ marginBottom: '10px' }}>
                <h5># of Applicant</h5>
                <input type="text" className="underline-input" ref="applicant" />
              </div>
            </div>
            : ''
          }
          <div className="row">
            <div className="col-sm-12" style={{ marginBottom: '10px' }}>
              <h5>Expired at</h5>
              <DatePicker
                dateFormat="YYYY-MM-DD"
                selected={startDate}
                onChange={(d) => this.handleChange(d)} />
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <div className="register-button text-center" onClick={() => this.onClickPollAdd()}>등록</div>
        </div>
      </div>
    );
  }
}

PollAddView.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    isSignedin: !!users.user,
  };
};

export default connect(mapStateToProps)(PollAddView);
