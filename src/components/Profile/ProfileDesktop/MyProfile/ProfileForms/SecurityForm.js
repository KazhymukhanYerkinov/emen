import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { LengthCreator, passwordRequired, textRequired } from '../../../../../validators/validator';
import { InputPassword, InputText } from '../../../../common/FormControl/FormControl';

import cls from './ProfileForms.module.css';

const lengthValidation = LengthCreator(8, 100);

const SecurityForm = (props) => {

  

  
  return (
    <form onSubmit = { props.handleSubmit }>
      <div className={cls.sub__title}> Безопасность </div>

      { !props.change_password ? 
      <Field
        readOnly
        isButton
        half_width
        name='old_password_1'
        component={ InputText }
        setChangePassword={ props.changePasswordAC }
        label={'Старый пароль'}
        placeholder = {'Пароль изменен ' + props.convert_date}
      />

      :<React.Fragment>
          <Field
            isButton
            half_width
            name='old_password'
            component={ InputPassword }
            setChangePassword={ props.changePasswordAC }
            label={'Старый пароль'}
            placeholder = {'Пароль изменен ' + props.convert_date}
            validate = {[ textRequired ]}
          />
          <div className={cls.form__groups}>
            <Field half_width name='new_password' component={InputPassword} label='Новый пароль' validate = {[ textRequired, passwordRequired, lengthValidation ]}/>
            <Field half_width name='confirm_password' component={InputPassword} label='Повторить новый пароль' validate = {[ textRequired, passwordRequired, lengthValidation ]}/>
          </div>
          <div className = {cls.button}>
            <button className={cls.submit} type='submit'> Подтвердить  </button>
          </div>
        </React.Fragment>}

    </form>
  )
}

const SecurityReduxForm = reduxForm({ form: 'security' })(SecurityForm);


export default SecurityReduxForm;