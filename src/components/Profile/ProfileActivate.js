import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { emailActivate } from '../../redux/profile-reducer';
import Modal from '../common/Modal/Modal';



const ProfileActivate = ({ match }) => {

    const dispatch = useDispatch();
    const { activateError, fromRegisterPage } = useSelector(({ authPage }) => authPage);

    React.useEffect(() => {
        let uid = match.params.uid;
        let token = match.params.token;

        dispatch(emailActivate(uid, token));
    }, [dispatch, match.params.uid, match.params.token]);


    if (fromRegisterPage === 2) {
        return <Redirect to = '/success' />
    }

    if (activateError.showError) {
        return <Modal duringTheTest errorsStartTests = { activateError }/>
    }



    return <div style = {{ height: '100vh' }}></div>;
}

export default withRouter(ProfileActivate);
