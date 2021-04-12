import React from 'react';
import { Link } from 'react-router-dom';



const AuthModal = (props) => {
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
      }, [])

    return (
        <div className = 'modal'>
            <div className = 'modal__inner'>
                <div className = 'modal__header'>
                    <div className = 'modal__title'> Вы действительно хотите выйти? </div>
                </div>
                

                <div className = 'modal__footer'>
                    <button className = 'button button__logout button__logout--cancel' onClick = {() => props.handleLogoutModal(false)}> Отмена </button>
                    <Link to = '/' className = 'button button__logout ml-5' onClick = { props.pressTheOkButton }> OK </Link>
                </div>
            </div>
        </div>
    )
}

export default AuthModal;