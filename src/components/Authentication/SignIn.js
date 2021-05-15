import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';



import signin from '../../assets/images/signin.jpg'
import loader from '../../assets/loader/button__loader.svg';
import { InputCheckBox, InputPassword, InputText } from '../common/FormControl/FormControl';
import { textRequired, LengthCreator, emailRequired, passwordRequired } from '../../validators/validator';


const lengthValidation = LengthCreator(8, 100);

const SignInForm = ({ handleSubmit, error, showFetchButton }) => {
    return ( 
        <> 
        { error && <span className = 'auth__error'> { error } </span> }
        <form onSubmit = { handleSubmit }>
            <div className = 'auth__input'>
                <Field name = { 'email' } component = { InputText } label = { 'E-mail' } placeholder = 'E-mail' validate = { [emailRequired] }/>   
                <Field name = { 'password' } component = { InputPassword } label = { 'Пароль' }  validate = { [textRequired,passwordRequired, lengthValidation] }/>
            </div>
            <button className = 'button button__submit' type = 'submit'> {showFetchButton ? <img className = 'auth__loader' src = { loader } alt = '' />:<span>Кіру</span>} </button> 
            

            <div className = 'auth__checkbox'>
                <Field name = { 'ckeckbox' } component = { InputCheckBox } label = { 'Мені есте сақтау' } />
                <Link className = 'auth__checkbox-text' to = {'/forgotpassword'}> Пароль ұмыттыңыз ба? </Link>
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
    

    if ( isAuth && !showFetchButton) {
        return <Redirect to = '/subjects' />
    }
    
    return (
        <div className = 'auth'>
            <div className = 'container'>
                <div className = 'auth__inner'>

                    <div className = 'auth__image'>
                        <img className = 'image image__80' src = { signin } alt = ""/>
                    </div>

                    <div className = 'auth__content'>
                        <div className = 'title'> Кіру </div>
                        <SignInReduxForm onSubmit = { onSubmit } showFetchButton = { showFetchButton }/>

                        <div className = 'auth__helper'>
                            <Link to = '/registration'> Аккаунтыңыз жоқпа? </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SignIn;