import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { onlyNumber, textRequired } from '../../../validators/validator';
import { InputText } from '../../common/FormControl/FormControl';
import AmountModal from '../../common/Modal/AmountModal';



const MyWalletForm = ({ handleSubmit }) => {
  return (
    <React.Fragment>
      <form onSubmit = { handleSubmit }>
        <Field
          name = 'amount'
          component = { InputText } 
          label = 'Введите свои деньги' 
          placeholder = 'Введите свои деньги'
          validate = { [ textRequired, onlyNumber ] }
        />

        <button type = 'submit' className = 'button button__submit'>
          Пополнить баланс
        </button>
      </form>
    </React.Fragment>
  )
}

const MyWalletReduxForm = reduxForm({ form: 'my-wallet-form' })(MyWalletForm)

const MyWallet = (props) => {

  const onSubmit = (formData) => {
    props.upBalance(formData.amount)
  }

  return (
    <div className = 'my-profile'>

      <div className = 'my-profile__header'>
        <div className = 'my-profile__title'> Мой кошелек </div>
      </div>

      <hr className = 'my-profile__hr'/>

      <div className = 'my-profile__content'>
        <MyWalletReduxForm
          
          onSubmit = { onSubmit }
        />
      </div>
      

      { props.amount_data && <AmountModal amount_data = { props.amount_data }/> }

    </div>
  )
}


export default MyWallet;