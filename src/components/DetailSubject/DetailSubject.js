import React from 'react';
import DetailHeader from './DetailHeader/DetailHeader';


import cls from './DetailSubject.module.css';
import SettingsModal from './SettingsModal/SettingsModal';

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
            </div>
        </div>
    )
}

export default DetailSubject;