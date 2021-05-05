import React from 'react';
import { Field, reduxForm } from 'redux-form';


import signup from '../../assets/images/signup.jpg';
import loader from '../../assets/loader/button__loader.svg';
import { InputPassword, InputText } from '../common/FormControl/FormControl';

import { Link, Redirect } from 'react-router-dom';
import { emailRequired, LengthCreator, passwordRequired, textRequired } from '../../validators/validator';


const lengthValidation = LengthCreator(8, 100);

const SignUpForm = ({ handleSubmit, showFetchButton, error }) => {
    return (
        <>
        { error && <span className = 'auth__error'> { error } </span> }
        <form onSubmit = { handleSubmit }>
            <div className = 'auth__input'>
                <Field name = { 'name' } component = { InputText } placeholder = 'Имя' label = { 'Имя' } validate = { textRequired }/>
                <Field name = { 'surname' } component = { InputText } placeholder = 'Фамилия' label = { 'Фамилия' } validate = { textRequired }/>
                <Field name = { 'email' } component = { InputText } placeholder = 'Email' label = { 'Email' } validate = { emailRequired }/>
                <Field name = { 'password1' } component = { InputPassword } label = { 'Создать пароль' } validate = {[ textRequired, passwordRequired, lengthValidation ]}/>
                <Field name = { 'password2' } component = { InputPassword } label = { 'Повторить пароль' } validate = {[ textRequired, passwordRequired, lengthValidation ]}/>
            </div>
            <button className = 'button button__submit'  type = 'submit'>  {showFetchButton ? <img className = 'auth__loader' src = { loader } alt = ''/>:<span>Зарегистрироваться</span>} </button>
        </form>
        </>
    )
}
const SignUpReduxForm = reduxForm({ form: 'signup' })(SignUpForm);

const SignUp = ({ signUpThunk, fromRegisterPage }) => {
    const [ showFetchButton, setShowFetchButton ] = React.useState(false);

    const onSubmit = (formData) => {
        setShowFetchButton(true);
        signUpThunk(formData.email, formData.name, formData.surname, formData.password1, formData.password2)  
        .finally(() => {
            setShowFetchButton(false);
        })
    }
    if (fromRegisterPage !== 0 && !showFetchButton) {
        return <Redirect to = '/success' />
    }
    return (
        <div className = 'auth'>
            <div className = 'container'>
                <div className = 'auth__inner'>

                    <div className = 'auth__image'>
                        <img className = 'image image__80' src = { signup } alt = " "/>
                    </div>

                    <div className = 'auth__content'>
                        <div className = 'title'> Регистрация </div>
                        <SignUpReduxForm onSubmit = { onSubmit } showFetchButton = { showFetchButton } />

                        <div className = 'auth__helper mt-10'>
                            <Link to = '/login'> Есть аккаунт? </Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default SignUp;