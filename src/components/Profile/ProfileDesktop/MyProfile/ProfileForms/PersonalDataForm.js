import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { normalizePhone } from '../../../../../validators/normalize';
import { textRequired } from '../../../../../validators/validator';
import { InputSelect, InputText } from '../../../../common/FormControl/FormControl';

import cls from './ProfileForms.module.css';


const PersonalDataForm = (props) => {

  return (
    <form onSubmit = { props.handleSubmit }>
      <div className={cls.sub__title}> Личные данные </div>
      <div className={cls.form__groups}>
        
        <Field 
          half_width 
          not_label
          name='name' 
          component={InputText} 
          label='Имя' 
          validate = { textRequired }
        />

        <Field 
          half_width 
          not_label
          name='surname' 
          component={InputText} 
          label='Фамилия' 
          validate = { textRequired }
        />

        <Field 
          half_width 
          not_label
          name='telephone' 
          component={InputText} 
          label='Телефон' 
          normalize = { normalizePhone }
        />

        <Field 
          half_width 
          name='city' 
          component={InputSelect} 
          label='Город' 
        >
          <option value = { props.initialValues.city }> { props.initialValues.city_name } </option>
          { props.cities.map((item, index) => <option key = { index } value = {item.id}> { item.name } </option>) }
        </Field>

      </div>
      <div className={cls.button}>
        <button className={cls.submit} type='submit'> Сохранить  </button>
      </div>
    </form>
  )
}
const PersonalDataReduxForm = reduxForm({ form: 'personal_data' })(PersonalDataForm);

export default PersonalDataReduxForm;

