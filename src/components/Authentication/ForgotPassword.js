import React from 'react';
import { Field, reduxForm } from 'redux-form';

import forgot from '../../assets/images/forgot.jpg';
import loader from '../../assets/loader/button__loader.svg';


import { emailRequired } from '../../validators/validator';
import { InputText } from '../common/FormControl/FormControl';



const ForgotPasswordForm = ({ handleSubmit, error, showFetchButton }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='auth__input'>

          <div className='auth__step'> 1. Проверка почты </div>
          <Field
            placeholder = {'Email'}
            name={'email'} 
            component={InputText} 
            label={'Email'} 
            validate={emailRequired} 
          />
          {error && <span className='auth__error-blue'> {error} </span>}
          <button className='button button__submit' type='submit'> {showFetchButton ? <img className='auth__loader' src={loader} alt='' /> : <span>Далее</span>} </button>

        </div>
      </form>
    </>
  )
}
const ForgotPasswordReduxForm = reduxForm({ form: 'forgot' })(ForgotPasswordForm);

const ForgotPassword = ({ emailResetConfirmThunk }) => {
  const [showFetchButton, setShowFetchButton] = React.useState(false);
  const onSubmit = (formData) => {
    setShowFetchButton(true);
    emailResetConfirmThunk(formData.email).finally(() => {
      setShowFetchButton(false);
    })
  }
  return (
    <div className='auth'>
      <div className='container'>
        <div className='auth__inner'>

          <div className='auth__image'>
            <img className='image image__80' src={forgot} alt="" />
          </div>

          <div className='auth__content'>
            <div className='title'> Восстановление пароля </div>
            <ForgotPasswordReduxForm onSubmit={onSubmit} showFetchButton={showFetchButton} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;