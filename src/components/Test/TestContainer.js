import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { 
  getQuestionThunk, 
  saveTestQuestionThunk, 
  finishAllTestThunk, 
  setShowErrorAC, 
  setQuestionsFailAC 
} from '../../redux/startTest-reducer';


import Test from './Test';
import Preloader from '../common/Preloader/Preloader';
import Modal from '../common/Modal/Modal';
import { getAnswersWithData } from '../../utils/getAnswersWithData';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';



class TestContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      stop_timer: false,
      open_finish_modal: false,
      finish_all_test: false,
      map_with_answers: new Map(),
    }
  }
  
  componentDidMount() {
    const exam_uid = this.props.match.params.examUID;
    this.props.getQuestionThunk(exam_uid);
  }

  componentWillUnmount() {
    this.props.setQuestionsFailAC();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      
      if (this.props.data) {
        let map_answered = getAnswersWithData(this.props.data);

        this.setState({
          map_with_answers: new Map(map_answered)
        })
      }
    }
  }


  questionWithAnswers = () => {
    let student_answers = [];

    for (let item of this.state.map_with_answers.entries()) {
      let answer;

      if (Array.isArray(item[1].answer)) {
        answer = [...item[1].answer];
      }
      else {
        answer = item[1].answer;
      }

      let body = {
        question: item[0],
        answers: answer,
        variant: item[1].variant,
      }
      student_answers.push(body);
    }

    let object = {
      student_answers,
      examUID: this.props.match.params.examUID,
    }

    return object;

  }

  // Тессті толық бітіру
  finishTest = (is_type, left_time) => {
    let { student_answers, examUID } = this.questionWithAnswers();

    if (!is_type) {
      this.handleShowCloseModal();
    }

    this.props.finishAllTestThunk(examUID, left_time, this.state.stop_timer, student_answers);

    
    this.handleStopTimer(true);
    this.setState({ finish_all_test: true });
  }

  // Сұрақтарды серверге жіберіп сақтау
  saveQuestion = (left_time) => {
    let { student_answers, examUID } = this.questionWithAnswers();
    this.props.saveTestQuestionThunk(examUID, left_time, this.state.stop_timer, student_answers);
  }

  // Жауаптың бар жоғын тексеру
  hasAnswer = (question_id, answer_id) => {
    if (this.state.map_with_answers.has(question_id)) {

      const get_answers = this.state.map_with_answers.get(question_id).answer;
      if (get_answers.includes(answer_id)) {
        return true;
      }
    }
    return false;
  }

  // Объекттерді мапқа қосу
  addObjectInMap = (question_id, answers, uuid) => {
    const object = {
      question: question_id,
      answer: answers,
      variant: uuid
    }
    this.setState((prev_state) => {
      return { map_with_answers: new Map( prev_state.map_with_answers.set(question_id, object) ) }
    })

  }

  // Сұрақтарды мапқа сақтау
  saveQuestionWithMap = (question_id, answer_id, uuid, is_multiple) => {
    if (!is_multiple) {
      this.addObjectInMap(question_id, [answer_id], uuid);
    }
    else {
      if (!this.state.map_with_answers.has(question_id)) {
        this.addObjectInMap(question_id, [answer_id], uuid);
      }
      else {
        const get_answers = this.state.map_with_answers.get(question_id).answer;

        if (get_answers.includes(answer_id)) {

          const temp_answers = get_answers.filter(id => id !== answer_id);

          if (temp_answers.length === 0) {
            this.setState((prev_state) => {
              return { map_with_answers: new Map( prev_state.map_with_answers.delete(question_id) ) }
            })
          }
          else {
            this.addObjectInMap(question_id, temp_answers, uuid);
          }
        }
        else {
          this.addObjectInMap(question_id, [...get_answers, answer_id], uuid);
        }
      }
    }
  }


  // Уақыт тоқтату және жүргізу
  handleStopTimer = (isType = false) => {
    this.setState((prev_state) => {
      if (isType) {
        return { stop_timer: true };
      }
      else {
        return { stop_timer: !prev_state.stop_timer };
      }
    })
  }

  // Модал окно шығару
  handleShowModal = () => {
    this.handleStopTimer();
    this.setState({ open_finish_modal: true});
  }

  // Модал окно шығару және жабу
  handleShowCloseModal = () => {
    this.setState((prev_state) => {
      return { open_finish_modal: !prev_state.open_finish_modal }
    })
  }

  // Барлық данныйларды тазалау
  handleClearAllData = () => {
    this.props.setQuestionsFailAC();
  }


  render() {

    // Егер тест басталарда қандай да бір қате шықса
    if (this.props.errorsStartTests.showError) {
      return (
        <Modal 
          duringTheTest
          errorsStartTests={this.props.errorsStartTests}
          handleCloseModal = { this.props.setShowErrorAC }
        />
      )
    }

    // Тест данныйлар келгенше загрузка жасау
    if (!this.props.data || this.props.isFetching) {
      return <Preloader />
    }

    // Константаларды алып алу
    const FULL_EXAM_TIME = this.props.data.full_examination_time;
    const LEFT_TIME = this.props.data.left_seconds - 1;
    const TEST_BANNER = this.props.data.banner;
    const TEST_QUESTIONS = this.props.data.variants;
    let QUESTION_SIZE = 140;

    return (
      <Test
        data = { this.props.data }
        examUID = { this.props.match.params.examUID }
        errorsStartTests = { this.props.errorsStartTests }
        BASE_URL = { this.props.BASE_URL }

        FULL_EXAM_TIME = { FULL_EXAM_TIME }
        LEFT_TIME = { LEFT_TIME }
        TEST_BANNER = { TEST_BANNER }
        TEST_QUESTIONS = { TEST_QUESTIONS }
        QUESTION_SIZE = { QUESTION_SIZE }

        stop_timer = { this.state.stop_timer }
        handleStopTimer = { this.handleStopTimer }

        open_finish_modal = { this.state.open_finish_modal }
        handleShowModal = { this.handleShowModal }
        handleShowCloseModal = { this.handleShowCloseModal }

        map_with_answers = { this.state.map_with_answers }
        saveQuestionWithMap = { this.saveQuestionWithMap }
        hasAnswer = { this.hasAnswer }
        
        finish_all_test = { this.state.finish_all_test }
        saveQuestion = { this.saveQuestion }
        finishTest = { this.finishTest }

        handleClearAllData = { this.handleClearAllData }
      />
    )
  }



}

let mapStateToProps = (state) => ({
  data: state.testPage.data,
  isFetching: state.testPage.isFetching,
  errorsStartTests: state.testPage.errorsStartTests
})

export default compose(
connect(mapStateToProps, {
  getQuestionThunk,
  saveTestQuestionThunk,
  finishAllTestThunk,
  setShowErrorAC,
  setQuestionsFailAC}),
  withRouter,
  WithAuthRedirect,
)(TestContainer);