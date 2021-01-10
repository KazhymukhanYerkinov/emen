import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from '@material-ui/core';

import signin from '../../assets/images/signin.jpg'
import facebook from '../../assets/logos/facebook__btn.svg';
import google from '../../assets/logos/google__btn.svg';
import { InputCheckBox, InputPassword, InputText } from '../common/FormControl/FormControl';

import cls from './SignIn.module.css';


const SignInForm = () => {
    return (
        <form className = {cls.signin__form}>
            <div className = {cls.signin__input}>
                <Field name = { 'email' } component = { InputText } label = { 'E-mail' } />   
                <Field name = { 'password' } component = { InputPassword } label = { 'Пароль' } />
            </div>
            <button className = 'button submit'> Войти </button>  
            <div className = {cls.signin__check}>
                <Field name = { 'ckeckbox' } component = { InputCheckBox } label = { 'Запомнить меня' } />
                <Link className = { cls.check__text } to = {'/change-email'}> Забыли пароль? </Link>
            </div>  
        </form>
    )
}
const SignInReduxForm = reduxForm({ form: 'signin' })(SignInForm);

const SignIn = () => {
    return (
        <div className = {cls.signin}>
            <div className = 'container'>
                <div className = {cls.signin__inner}>

                    <div className = {cls.signin__image}>
                        <img className = {cls.image} src = { signin } alt = ""/>
                    </div>

                    <div className = {cls.signin__content}>
                        <div className = 'title'> Вход </div>
                        <SignInReduxForm />
                        <div className = 'helper__text'> Войти с помощью </div>
                        <button className = 'button facebook'> 
                            <img src = { facebook } alt = ""/>
                            Войти с помощью Facebook 
                        </button>
                        <button className = 'button google'>
                            <img src = { google } alt = "" /> 
                            Войти с помощью Google 
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SignIn;