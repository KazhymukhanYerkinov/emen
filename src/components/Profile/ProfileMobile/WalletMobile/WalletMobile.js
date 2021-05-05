import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { onlyNumber, textRequired } from '../../../../validators/validator';
import { InputText } from '../../../common/FormControl/FormControl';

import ProfileHeaderMobile from '../ProfileHeaderMobile/ProfileHeaderMobile';

import cls from '../../ProfileMobile/ProfileMobileForms/ProfileMobileForms.module.css';
import AmountModal from '../../../common/Modal/AmountModal';


const WalletMobileForm = (props) => {
  return (
    <form className = {cls.form} onSubmit = { props.handleSubmit }>
      <div>
        <Field
          name = 'amount'
          component = { InputText } 
          label = 'Введите свои деньги' 
          placeholder = 'Введите свои деньги'
          validate = { [ textRequired, onlyNumber ] }
        />
      </div>
      <button type = 'submit' className = 'button button__submit'>
        Пополнить баланс
      </button>
    </form>
  )
}

const WalletMobileReduxForm = reduxForm({ form: 'my-wallet-form' })(WalletMobileForm)

const WalletMobile = (props) => {

  const onSubmit = (formData) => {
    props.upBalance(formData.amount)
  }

  return (
    <div>
      <ProfileHeaderMobile />

      <div className={cls.content}>
        <div className={cls.description}> Введите свои деньги </div>
        <WalletMobileReduxForm onSubmit = { onSubmit }/>
      </div>

      { props.amount_data && <AmountModal amount_data = { props.amount_data }/> }
      
    </div>
  )
}

export default WalletMobile;