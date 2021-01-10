import React from 'react';
import { Field, reduxForm } from 'redux-form';

import facebook from '../../assets/logos/facebook__btn.svg';
import google from '../../assets/logos/google__btn.svg';
import signup from '../../assets/images/signup.jpg';
import { InputPassword, InputText } from '../common/FormControl/FormControl';

import cls from './SignUp.module.css';


const SignUpForm = () => {
    return (
        <form>
            <div className = {cls.signup__input}>
                <Field name = { 'name' } component = { InputText } label = { 'Имя' }/>
                <Field name = { 'surname' } component = { InputText } label = { 'Фамилия' } />
                <Field name = { 'email' } component = { InputText } label = { 'Email' } />
                <Field name = { 'password1' } component = { InputPassword } label = { 'Создать пароль' } />
                <Field name = { 'password2' } component = { InputPassword } label = { 'Повторить пароль' } />
            </div>
            <button className = 'button submit'> Зарегистрироваться </button>
        </form>
    )
}
const SignUpReduxForm = reduxForm({ form: 'signup' })(SignUpForm);

const SignUp = () => {
    return (
        <div className = {cls.signup}>
            <div className = 'container'>
                <div className = {cls.signup__inner}>

                    <div className = {cls.signup__image}>
                        <img className = {cls.image} src = { signup } alt = " "/>
                    </div>

                    <div className = {cls.signup__content}>
                        <div className = 'title'> Регистрация </div>
                        <SignUpReduxForm />
                        <div className = 'helper__text'> Войти с помощью </div>
                        <button className = 'button facebook'> 
                            <img src = { facebook } alt = ""/>
                            Войти с помощью Facebook 
                        </button>
                        <button className = 'button google'> 
                            <img src = { google } alt = ""/>
                            Войти с помощью Google  
                        </button>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default SignUp;