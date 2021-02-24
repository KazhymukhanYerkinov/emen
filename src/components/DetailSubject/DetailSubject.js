import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import DetailContent from './DetailContent/DetailContent';
import DetailHeader from './DetailHeader/DetailHeader';
import SettingsModal from './SettingsModal/SettingsModal';
import EntContent from './EntContent/EntContent';
import DetailHistory from './DetailHistory/DetailHistory';
import Preloader from '../common/Preloader/Preloader';
import { getDetailSubjectThunk } from '../../redux/subject-reducer';

import cls from './DetailSubject.module.css';




const DetailSubject = ({ match, BASE_URL }) => {
    
    const dispatch = useDispatch();
    const detail = useSelector(({ subjectPage }) => subjectPage.detail);
    const subjectID = match.params.subjectID;
    
    
    

    const [ showSettingsModal, setShowSettingsModal ] = React.useState(false);

    React.useEffect(() => {
        dispatch(getDetailSubjectThunk(subjectID))
    }, [])

    const onChangeShowSettingsModal = (isValid) => {
        setShowSettingsModal(isValid);
    }

    if (!detail) {
        return <Preloader />
    }
    



    return (
        <div className = {cls.detail}>
            <div className = 'container'>
                <DetailHeader onChangeShowSettingsModal = { onChangeShowSettingsModal } banner = { detail.banner_subject } BASE_URL = { BASE_URL }/>
                {showSettingsModal && <SettingsModal onChangeShowSettingsModal = { onChangeShowSettingsModal }/>}

                <div className = {cls.detail__content}>
                    <Route exact path = {`/showTheme/${subjectID}/SUBJECT`} 
                        render = {() => <DetailContent topics = { detail.topics }/>}/>
                    <Route exact path = {`/showTheme/${subjectID}/ENT`} component = { EntContent } />
                    <DetailHistory />
                </div>
            </div>
        </div>
    )
}

export default withRouter(DetailSubject);