import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { normalizePhone } from '../../../../validators/normalize';
import { textRequired } from '../../../../validators/validator';
import { InputSelect, InputText } from '../../../common/FormControl/FormControl';

import cls from './BasicDataMobile.module.css';

const PersonalDataMobileForm = (props) => {
  return (
    <form>
      <Field
        full_width 
        name='name' 
        component={InputText} 
        label='Имя' 
        validate={textRequired} 
      />

      <Field 
        full_width 
        name='surname' 
        component={InputText} 
        label='Фамилия' 
        validate={textRequired} 
      />

      <Field 
        full_width 
        name='telephone' 
        component={InputText} 
        label='Телефон' 
        normalize={normalizePhone} 
      />

      <Field 
        full_width 
        name='city' 
        component={InputSelect} 
        label='Город' 
      > 
        <option defaultValue = { props.initialValues.city.id }> { props.initialValues.city } </option>
        { props.cities.map((item, index) => <option key = { index } value = {item.id}> { item.name } </option>) }
      </Field>
      
      <button className={cls.submit} type='submit'> Сохранить </button>
    </form>
  )
  
}
const PersonalDataMobileReduxForm = reduxForm({ form: 'personal_data_mobile'})(PersonalDataMobileForm)

const PersonalDataMobile = (props) => {

  return (
    <div className={cls.personal__mobile}>
      <div className={cls.personal__title}> Личные данные </div>
      <PersonalDataMobileReduxForm
        initialValues = { props.initialValues }
        cities = { props.cities }
      />
    </div>
  )
}

export default PersonalDataMobile;