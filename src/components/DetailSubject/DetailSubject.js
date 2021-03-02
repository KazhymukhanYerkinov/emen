import React from 'react';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { getDetailSubjectThunk } from '../../redux/subject-reducer';
import { postStartTestThunk } from '../../redux/startTest-reducer';

import DetailContent from './DetailContent/DetailContent';
import DetailHeader from './DetailHeader/DetailHeader';
import SettingsModal from './SettingsModal/SettingsModal';
import EntContent from './EntContent/EntContent';
import DetailHistory from './DetailHistory/DetailHistory';
import Preloader from '../common/Preloader/Preloader';


import cls from './DetailSubject.module.css';



const DetailSubject = ({ match, BASE_URL }) => {
    
    const dispatch = useDispatch();
    const { detail } = useSelector(({ subjectPage }) => subjectPage);
    const { examUID, isStart } = useSelector(({ testPage }) => testPage);
    

    const subjectID = match.params.subjectID;
    
    
    

    const [ settings, setSettings ] = React.useState({ modal: {show: false, topicID: null} });

    // топикарды серверден алу
    React.useEffect(() => {
        dispatch(getDetailSubjectThunk(subjectID));
    }, [])

    // Старт басқандағы модал окно ашылуы
    const onHandleSettingsModal = (show, topicID) => {
        setSettings(( prevSettings ) => {
            return {
                ...prevSettings,
                modal: { show: show, topicID: topicID }
            }
        })
    }
    

    if (!detail) {
        return <Preloader />
    }

    // Тестты бастаудағы стандарт параметрлер
    const SUBJECT_ID = detail.banner_subject.id;
    const SUBJECT_FULL_EXAMINATION = detail.banner_subject.subject_examination_type
    const SUBJECT_EXAMINATION_BY_TOPIC = detail.banner_subject.topic_examination_type

    // Тестті бастау
    const handleStartTest = (withHint, levelTest) => {
        if (!settings.modal.topicID) {
            dispatch(postStartTestThunk(SUBJECT_FULL_EXAMINATION, SUBJECT_ID, withHint, levelTest))
        }
        else {
            dispatch(postStartTestThunk(SUBJECT_EXAMINATION_BY_TOPIC, SUBJECT_ID, withHint, levelTest, settings.modal.topicID))
        }
    }
    



    return (
        <div className = {cls.detail}>
            <div className = 'container'>
                <DetailHeader 
                    onHandleSettingsModal = { onHandleSettingsModal } 
                    banner = { detail.banner_subject } 
                    BASE_URL = { BASE_URL }/>

                {settings.modal.show && 
                <SettingsModal 
                    onHandleSettingsModal = { onHandleSettingsModal } 
                    handleStartTest = { handleStartTest }/>}

                <div className = {cls.detail__content}>
                    <Route exact path = {`/showTheme/${subjectID}/SUBJECT`} 
                        render = {() => <DetailContent 
                            topics = { detail.topics } 
                            onHandleSettingsModal = { onHandleSettingsModal }/>}/>

                    <Route exact path = {`/showTheme/${subjectID}/ENT`} 
                        render = {() => <EntContent />} />
                    <DetailHistory />
                </div>
            </div>
        </div>
    )
}

export default compose(withRouter, WithAuthRedirect)(DetailSubject);