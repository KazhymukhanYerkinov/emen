import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { normalizePhone } from '../../../../../validators/normalize';
import { textRequired } from '../../../../../validators/validator';
import { InputText } from '../../../../common/FormControl/FormControl';

import cls from './ProfileForms.module.css';


const PersonalDataForm = () => {

  
  return (
    <form>
      <div className={cls.sub__title}> Личные данные </div>
      <div className={cls.form__groups}>
        
        <Field 
          half_width 
          name='name' 
          component={InputText} 
          label='Имя' 
          validate = { textRequired }
        />

        <Field 
          half_width 
          name='surname' 
          component={InputText} 
          label='Фамилия' 
          validate = { textRequired }
        />

        <Field 
          half_width 
          name='telephone' 
          component={InputText} 
          label='Телефон' 
          normalize = { normalizePhone }
        />

        <Field 
          half_width 
          name='city' 
          component={InputText} 
          label='Город' 
        />

      </div>
      <div className={cls.button}>
        <button className={cls.submit} type={'submit'}> Сохранить  </button>
      </div>
    </form>
  )
}
const PersonalDataReduxForm = reduxForm({ form: 'personal_data' })(PersonalDataForm);

export default PersonalDataReduxForm;

