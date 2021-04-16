import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { normalizePhone } from '../../../../validators/normalize';
import { textRequired } from '../../../../validators/validator';
import { InputSelect, InputText } from '../../../common/FormControl/FormControl';

import cls from './BasicDataMobile.module.css';

const PersonalDataMobileForm = (props) => {
  return (
    <form onSubmit = { props.handleSubmit }>
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
        <option defaultValue = { props.initialValues.city }> { props.initialValues.city_name } </option>
        { props.cities.map((item, index) => <option key = { index } value = {item.id}> { item.name } </option>) }
      </Field>
      
      <button className={cls.submit} type='submit'> {props.showFetchButton ? 'Загрузка...': 'Сохранить'} </button>
    </form>
  )
  
}
const PersonalDataMobileReduxForm = reduxForm({ form: 'personal_data_mobile'})(PersonalDataMobileForm)

const PersonalDataMobile = (props) => {

  const [ showFetchButton, setShowFetchButton ] = React.useState(false);

  const onSubmit = (formData) => {
    if (formData.name === props.initialValues.name 
      && formData.surname === props.initialValues.surname
      && formData.telephone === props.initialValues.telephone
      && formData.city === props.initialValues.city) {
    }
    else {
      setShowFetchButton(true);
      props.updatePersonalProfile(formData.name, formData.surname, formData.telephone, formData.city)
      .finally(() => {
        setShowFetchButton(false);
      });
    }
  }

  return (
    <div className={cls.personal__mobile}>
      <div className={cls.personal__title}> Личные данные </div>
      <PersonalDataMobileReduxForm
        initialValues = { props.initialValues }
        cities = { props.cities }
        showFetchButton = { showFetchButton }

        onSubmit = { onSubmit }
      />
    </div>
  )
}


export default PersonalDataMobile;