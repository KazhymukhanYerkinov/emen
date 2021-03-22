import React from 'react';
import { compose } from 'redux';
import Cookie from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, withRouter, useHistory } from 'react-router-dom';

import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { getDetailSubjectThunk, setDetailSubject } from '../../redux/subject-reducer';
import { postStartTestThunk, setShowErrorAC } from '../../redux/startTest-reducer';

import DetailContent from './DetailContent/DetailContent';
import DetailHeader from './DetailHeader/DetailHeader';
import SettingsModal from './SettingsModal/SettingsModal';
import EntContent from './EntContent/EntContent';
import DetailHistory from './DetailHistory/DetailHistory';
import Preloader from '../common/Preloader/Preloader';
import Modal from '../common/Modal/Modal';


import cls from './DetailSubject.module.css';





const DetailSubject = ({ match, BASE_URL }) => {

  const dispatch = useDispatch();
  const history = useHistory();

  console.log(history.location.pathname.includes('/ENT'))

  const { detail } = useSelector(({ subjectPage }) => subjectPage);
  const { isStart, examUID, errorsStartTests } = useSelector(({ testPage }) => testPage);

  // Сабақтың жеке ID
  const subjectID = match.params.subjectID;

  // Модаль окно басқаратын state
  const [settings, setSettings] = React.useState({ modal: { show: false, topicID: null } });

  // ENT profile сабақтарды басқаратын state
  const [profSubjects, setProfSubject] = React.useState({ subjects: [null, null] });

  console.log(errorsStartTests);
  

  // топиктарды серверден алу
  React.useEffect(() => {
    dispatch(getDetailSubjectThunk(subjectID));

    return () => {
      dispatch(setDetailSubject(null));
      dispatch({ type: 'POST_QUESTION_FAIL' });
   }

  }, [dispatch, subjectID])

  // Старт басқандағы модал окно ашылуы
  const onHandleSettingsModal = (show, topicID) => {
    setSettings((prevSettings) => {
      return {
        ...prevSettings,
        modal: { show: show, topicID: topicID }
      }
    })
  }

  if (isStart) {
    return <Redirect to={`/start_test/${examUID}`} />
  }

  if (!detail) {
    return <Preloader />
  }



  // Тестты бастаудағы стандарт параметрлер
  const SUBJECT_ID = detail.banner_subject.id;
  const ENT_FULL_EXAMINATION = detail.banner_subject.examination_type;
  const SUBJECT_FULL_EXAMINATION = detail.banner_subject.subject_examination_type;
  const SUBJECT_EXAMINATION_BY_TOPIC = detail.banner_subject.topic_examination_type;

  


  // Тестті бастау
  const handleStartTest = (withHint, levelTest) => {
    Cookie.remove("answers");
    Cookie.remove("stopTime");
    Cookie.remove("timer");

    // ЕНТ бетінде тұрғанын анықтау
    if (history.location.pathname.includes('/ENT')) {

      // Таңдау пәндерін таңдаған таңдамағанын тексеру
      if (profSubjects.subjects[0] !== null && profSubjects.subjects[1] !== null) {
          let PSubjectID_1 = profSubjects.subjects[0].id;
          let PSubjectID_2 = profSubjects.subjects[1].id;
          dispatch(postStartTestThunk(ENT_FULL_EXAMINATION, null, withHint, levelTest, null, PSubjectID_1, PSubjectID_2));
      } else {
        
      }
    }
    else {
      if (!settings.modal.topicID) {
        dispatch(postStartTestThunk(SUBJECT_FULL_EXAMINATION, SUBJECT_ID, withHint, levelTest))
      }
      else {
        dispatch(postStartTestThunk(SUBJECT_EXAMINATION_BY_TOPIC, SUBJECT_ID, withHint, levelTest, settings.modal.topicID))
      }
    }

  }


  const handleErrorModal = () => {
    dispatch(setShowErrorAC());
  }



  return (
    <div className={cls.detail}>
      <div className='container'>
        <DetailHeader
          onHandleSettingsModal={onHandleSettingsModal}
          banner={detail.banner_subject}
          BASE_URL={BASE_URL} />
        
        {errorsStartTests.showError &&
          <Modal
            BASE_URL = { BASE_URL }
            handleCloseModal = { handleErrorModal }
            errorsStartTests = { errorsStartTests }
          />}
        {settings.modal.show &&
          <SettingsModal
            onHandleSettingsModal={onHandleSettingsModal}
            handleStartTest={handleStartTest} />}

        <div className={cls.detail__content}>
          <Route exact path={`/showTheme/${subjectID}/SUBJECT`}
            render={() => <DetailContent topics={detail.topics} onHandleSettingsModal={onHandleSettingsModal} />} />

          <Route exact path={`/showTheme/${subjectID}/ENT`}
            render={() => <EntContent detail={detail} BASE_URL={BASE_URL} profSubjects={profSubjects} setProfSubject={setProfSubject} />} />

          <DetailHistory />
        </div>
      </div>
    </div>
  )
}

export default compose(withRouter, WithAuthRedirect )(DetailSubject);