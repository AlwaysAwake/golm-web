import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions/actions';

class PollAddView extends Component {
  onClickPollAdd() {
    const { dispatch, user } = this.props;
    const titleRef = this.refs.title.value;
    const descriptionRef = this.refs.description.value;
    const answerARef = this.refs.answer_A.value;
    const answerBRef = this.refs.answer_B.value;
    const imgARef = this.refs.img_A.value;
    const imgBRef = this.refs.img_B.value;
    const descriptionARef = this.refs.description_A.value;
    const descriptionBRef = this.refs.description_B.value;
    let typeRef;

    if(this.refs.type_normal.checked) {
      typeRef = "normal";
    } else if (this.refs.type_premium.checked){
      typeRef = "premium";
    } else {
      typeRef = "";
    }

    if (titleRef !== '' && answerARef !== '' && answerBRef !== '' && typeRef !== '' && user) {
      dispatch(Actions.addPoll({
        title: titleRef,
        description: descriptionRef,
        answer_A: answerARef,
        answer_B: answerBRef,
        img_A: imgARef,
        img_B: imgBRef,
        description_A: descriptionARef,
        description_B: descriptionBRef,
        type: typeRef
      }));
    }
  }
  render() {
    return (
      <div className="container">
        <input ref="title" />
        <input ref="description" />
        <input ref="answer_A" />
        <input ref="answer_B" />
        <input ref="img_A" />
        <input ref="img_B" />
        <input ref="description_A" />
        <input ref="description_B" />
        <input ref="type_normal" name="type" type="radio" value="normal" />
        <input ref="type_premium" name="type" type="radio" value="premium" />

        <div className="button-wrapper">
          <button onClick={() => this.onClickPollAdd()}>추가</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    user: users.user,
    isFetching: state.common.isFetching,
  };
};

export default connect(mapStateToProps)(PollAddView);
