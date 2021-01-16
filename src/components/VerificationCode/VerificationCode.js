import React from 'react';
import { Field, reduxForm } from 'redux-form';

import code from '../../assets/images/verificode.jpg';
import { InputNumber } from '../common/FormControl/FormControl';

import cls from './VerificationCode.module.css';



const VerificationCodeForm = () => {
    return (
        <form>
            <div className = {cls.inputs}>
                <Field name = {'first'} component = { InputNumber } />
                <div className = {cls.code__desc}> На вашу почту был отправлен код подтверждения, введите код из письма </div>

                <button type='submit' className = 'button submit'> Потвердить </button>
            </div>
        </form>
    )
}
const VerificationCodeReduxForm = reduxForm({ form: 'code' })(VerificationCodeForm)

const VerificationCode = () => {
    return (
        <div className = {cls.code}>
            <div className = 'container'>
                <div className = {cls.code__inner}>

                    <div className = {cls.code__image}>
                        <img src = { code } alt = "" />
                    </div>

                    <div className = {cls.code__content}>
                        <div className = 'title'> Восстановление пароля </div>
                        <div className = {cls.step}> 2. Код подтверждения </div>
                        <VerificationCodeReduxForm />
                        <div className = {cls.code__repeat}> Отправить код еще раз </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerificationCode;