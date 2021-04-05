import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { activateAccountThunk } from '../../redux/auth-reducer';

import Modal from '../common/Modal/Modal';





const Activate = ({ match }) => {

    const dispatch = useDispatch();
    const { isActivate, activateError } = useSelector(({ authPage }) => authPage);

    React.useEffect(() => {
        let uid = match.params.uid;
        let token = match.params.token;

        dispatch(activateAccountThunk(uid, token));

    }, [dispatch, match.params.uid, match.params.token])


    if (isActivate) {
        return <Redirect to = '/login'/>
    }

    if (activateError.showError) {
        return <Modal duringTheTest errorsStartTests = { activateError }/>
    }

    return <div style = {{ height: '100vh' }}></div>;
    
}

export default withRouter(Activate);