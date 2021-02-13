import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { googleAuthenticate } from '../redux/auth-reducer';



const Layout = ({ children, googleAuthenticate }) => {
    let location = useLocation();

    React.useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        console.log('State: ' + state);
        console.log('Code: ' + code);

        if (state && code) {
            console.log("Here");
            googleAuthenticate(state, code)
        }

    }, [location])


    return (
        <div>
            { children }
        </div>

    )
}
export default connect(null, { googleAuthenticate })(Layout);