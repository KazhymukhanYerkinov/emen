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
                    <div className = 'modal__title'> Сіз шынымен шыққыңыз келе ме? </div>
                </div>
                

                <div className = 'modal__footer'>
                    <button className = 'button button__logout button__logout--cancel' onClick = {() => props.handleLogoutModal(false)}> Жоқ </button>
                    <Link to = '/' className = 'button button__logout ml-5' onClick = { props.pressTheOkButton }> Йа </Link>
                </div>
            </div>
        </div>
    )
}

export default AuthModal;