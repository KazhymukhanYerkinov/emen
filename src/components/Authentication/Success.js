import React from 'react';
import { Link} from 'react-router-dom';

import success from '../../assets/images/success.jpg';
import check from '../../assets/logos/success.svg';


const Success = ({ fromRegisterPage, setRedirectSuccessPage }) => {

    

    return (
        <div className = 'auth'>
            <div className = 'container'>
                <div className = 'auth__inner'>

                    <div className = 'auth__image'>
                        <img className = 'image image__80' src = { success } alt = ""/>
                    </div>

                    <div className = 'auth__content'>
                        <img className = 'image' src = { check } alt = ""/>
                        <div className = 'auth__description'>
                            {fromRegisterPage === 1 && <span> Мы отправили ссылку на Gmail для активации этой учетной записи. Войдите в систему по этой ссылке. </span>}
                            {fromRegisterPage === -1 && <span> Поздравляем, Ваш пароль был успешно изменен! </span> }
                        </div>
                        <Link to = '/login'>
                            <button className = 'button button__submit' onClick = {() => setRedirectSuccessPage(0)}> Войти </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success;