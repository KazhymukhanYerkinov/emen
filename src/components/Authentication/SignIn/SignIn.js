import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';



import signin from '../../../assets/images/signin.jpg'
import loader from '../../../assets/loader/button__loader.svg';
import { InputCheckBox, InputPassword, InputText } from '../../common/FormControl/FormControl';
import { textRequired, LengthCreator, emailRequired, passwordRequired } from '../../../validators/validator';


import cls from './SignIn.module.css';


const lengthValidation = LengthCreator(8, 100);

const SignInForm = ({ handleSubmit, error, showFetchButton }) => {
    return ( 
        <> 
        { error && <span className = {cls.error}> { error } </span> }
        <form className = {cls.signin__form} onSubmit = { handleSubmit }>
            <div className = {cls.signin__input}>
                <Field name = { 'email' } component = { InputText } label = { 'E-mail' } validate = { [emailRequired] }/>   
                <Field name = { 'password' } component = { InputPassword } label = { 'Пароль' }  validate = { [textRequired,passwordRequired, lengthValidation] }/>
            </div>
            <button className = {'button submit'} type = 'submit'> {showFetchButton ? <img className = {cls.loader} src = { loader } alt = '' />:<span>Войти</span>} </button>  
            <div className = {cls.signin__check}>
                <Field name = { 'ckeckbox' } component = { InputCheckBox } label = { 'Запомнить меня' } />
                <Link className = { cls.check__text } to = {'/forgotpassword'}> Забыли пароль? </Link>
            </div>  
        </form>
        </>
    )
}

const SignInReduxForm = reduxForm({ form: 'signin' })(SignInForm);

const SignIn = ({ isAuth, loginThunk }) => {

    const [ showFetchButton, setShowFetchButton ] = React.useState(false);

    const onSubmit = (formData) => {
        setShowFetchButton(true);
        loginThunk(formData.email, formData.password, formData.ckeckbox)
        .finally(() => {
            setShowFetchButton(false);
        })
    }
    

    

    if ( isAuth ) {
        return <Redirect to = '/subjects' />
    }
    
    return (
        <div className = {cls.signin}>
            <div className = 'container'>
                <div className = {cls.signin__inner}>

                    <div className = {cls.signin__image}>
                        <img className = {cls.image} src = { signin } alt = ""/>
                    </div>

                    <div className = {cls.signin__content}>
                        <div className = 'title'> Вход </div>
                        <SignInReduxForm onSubmit = { onSubmit } showFetchButton = { showFetchButton }/>
                        {/* <div className = 'helper__text'> Войти с помощью </div>
                        <button className = 'button facebook'> 
                            <img src = { facebook } alt = ""/>
                            Войти с помощью Facebook 
                        </button>
                        <button className = 'button google'>
                            <img src = { google } alt = "" /> 
                            Войти с помощью Google 
                        </button> */}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SignIn;