import React from 'react';
import * as axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

import cls from './Activate.module.css';



const Activate = ({ match }) => {
    const [ resultActive, setResultActive ] = React.useState(true);
    React.useEffect(() => {
        let uid = match.params.uid;
        let token = match.params.token;

        const body = JSON.stringify({ uid, token });
        const config = {
            headers: { 'Content-Type': 'application/json' }
        }
        try {
            axios.post('https://e-men.kz/api/v1/auth/users/activation/',body, config);
        } catch(err) {
            setResultActive(false);
        }
    }, [])
    return (
        <div className = {cls.activate}>
            <div className = {cls.activate__inner}>
                <div className = {cls.activate__desc}> {resultActive ? <span> Success Success Success Success Success Success Success </span>: <span> Error Error Error </span>}  </div>
                <button className = {cls.button}> Войти </button>
            </div>
        </div>
    )
}

export default withRouter(Activate);