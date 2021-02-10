import React from 'react';
import { Field, reduxForm } from 'redux-form';

import facebook from '../../assets/logos/facebook__btn.svg';
import google from '../../assets/logos/google__btn.svg';
import signup from '../../assets/images/signup.jpg';
import { InputPassword, InputText } from '../common/FormControl/FormControl';

import cls from './SignUp.module.css';
import { Redirect } from 'react-router-dom';


const SignUpForm = ({ handleSubmit, showFetchButton }) => {
    return (
        <form onSubmit = { handleSubmit }>
            <div className = {cls.signup__input}>
                <Field name = { 'name' } component = { InputText } label = { 'Имя' }/>
                <Field name = { 'surname' } component = { InputText } label = { 'Фамилия' } />
                <Field name = { 'email' } component = { InputText } label = { 'Email' } />
                <Field name = { 'password1' } component = { InputPassword } label = { 'Создать пароль' } />
                <Field name = { 'password2' } component = { InputPassword } label = { 'Повторить пароль' } />
            </div>
            <button className = 'button submit' type = 'submit'>  {showFetchButton ? <span> .... </span>:<span>Зарегистрироваться</span>} </button>
        </form>
    )
}
const SignUpReduxForm = reduxForm({ form: 'signup' })(SignUpForm);

const SignUp = ({ signUpThunk, fromRegisterPage }) => {
    console.log(fromRegisterPage);
    const [ showFetchButton, setShowFetchButton ] = React.useState(false);

    const onSubmit = (formData) => {
        setShowFetchButton(true);
        signUpThunk(formData.email, formData.name, formData.surname, formData.password1, formData.password2)  
        .finally(() => {
            setShowFetchButton(false);
        })
    }

    if (fromRegisterPage !== 0) {
        return <Redirect to = '/success' />
    }
    return (
        <div className = {cls.signup}>
            <div className = 'container'>
                <div className = {cls.signup__inner}>

                    <div className = {cls.signup__image}>
                        <img className = {cls.image} src = { signup } alt = " "/>
                    </div>

                    <div className = {cls.signup__content}>
                        <div className = 'title'> Регистрация </div>
                        <SignUpReduxForm onSubmit = { onSubmit } showFetchButton = { showFetchButton } />
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