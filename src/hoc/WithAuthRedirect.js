import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const WithAuthRedirect = ( Component ) => {
    let mapStateToForRedirectProps = (state) => ({
        isAuth: state.authPage.isAuth,
    });

    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to = {'/login'} />
        return <Component {...props} />
    }

    let ConnectAuthRedirectComponent = connect(mapStateToForRedirectProps)(RedirectComponent);
    return ConnectAuthRedirectComponent;
}