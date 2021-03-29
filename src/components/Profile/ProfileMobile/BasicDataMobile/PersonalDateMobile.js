import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { normalizePhone } from '../../../../validators/normalize';
import { textRequired } from '../../../../validators/validator';
import { InputText } from '../../../common/FormControl/FormControl';

import cls from './BasicDataMobile.module.css';

const PersonalDataMobileForm = () => {
    return (
        <form>
            <Field fullWidth profile__input name='name' component={InputText} label='Имя' validate = { textRequired }/>
            <Field fullWidth profile__input name='surname' component={InputText} label='Фамилия' validate = { textRequired }/>
            <Field fullWidth profile__input name='telephone' component={InputText} label='Телефон' normalize = { normalizePhone }/>
            <Field fullWidth profile__input name='city' component={InputText} label='Город' />
            <button className = {cls.submit} type = 'submit'> Сохранить </button>
        </form>
    )
}
const PersonalDataMobileReduxForm = reduxForm({ form: 'personal_data_mobile' })(PersonalDataMobileForm)

const PersonalDataMobile = () => {
    return (
        <div className = {cls.personal__mobile}>
            <div className = {cls.personal__title}> Личные данные </div>
            <PersonalDataMobileReduxForm />
        </div>
    )
}

export default PersonalDataMobile;