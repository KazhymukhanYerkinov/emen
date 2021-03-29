import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { InputPassword, InputText } from '../../../common/FormControl/FormControl';

import cls from './ProfileForms.module.css';


const SecurityForm = () => {

  const [changePassword, setChangePassword] = React.useState(false);

  return (
    <form>
      <div className={cls.sub__title}> Безопасность </div>

      <Field
        isButton
        readOnly = {!changePassword}
        profile__input
        name='old_password'
        component={changePassword ? InputPassword:InputText }
        setChangePassword={ setChangePassword }
        label={changePassword ? 'Старый пароль':'Пароль'}
      />

      {changePassword &&
        <React.Fragment>
          <div className={cls.form__groups}>
            <Field profile__input name='new_password' component={InputPassword} label='Новый пароль' />
            <Field profile__input name='confirm_password' component={InputPassword} label='Повторить новый пароль' />
          </div>
          <div className = {cls.button}>
            <button className={cls.submit} type={'submit'}> Сохранить  </button>
          </div>
        </React.Fragment>}

    </form>
  )
}

const SecurityReduxForm = reduxForm({ form: 'security' })(SecurityForm);

export default SecurityReduxForm;