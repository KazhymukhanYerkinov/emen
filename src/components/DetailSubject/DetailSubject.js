import React from 'react';
import DetailContent from './DetailContent/DetailContent';
import DetailHeader from './DetailHeader/DetailHeader';
import SettingsModal from './SettingsModal/SettingsModal';


import cls from './DetailSubject.module.css';
import DetailHistory from './DetailHistory/DetailHistory';
import { Route } from 'react-router-dom';
import EntContent from './EntContent/EntContent';


const DetailSubject = () => {
    const [ showSettingsModal, setShowSettingsModal ] = React.useState(false);

    const onChangeShowSettingsModal = (isValid) => {
        setShowSettingsModal(isValid);
    }

    return (
        <div className = {cls.detail}>
            <div className = 'container'>
                <DetailHeader onChangeShowSettingsModal = { onChangeShowSettingsModal }/>
                {showSettingsModal && <SettingsModal onChangeShowSettingsModal = { onChangeShowSettingsModal }/>}

                <div className = {cls.detail__content}>
                    <Route exact path = {`/detail/1/subject`} component = { DetailContent } />
                    <Route exact path = {`/detail/0/ent`} component = { EntContent } />
                    <DetailHistory />
                </div>
            </div>
        </div>
    )
}

export default DetailSubject;