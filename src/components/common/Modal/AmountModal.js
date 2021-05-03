import React from 'react';






const AmountModal = (props) => {

  const { form_name, logon_link, BackLink, PostLink, FailurePostLink, email, Signed_Order_B64 } = props.amount_data;

  return (
    <div className = 'modal'>
      <div className = 'modal__inner'>

        <div className = 'modal__header'>
          <div className = 'modal__title'> Продолжить тестирования </div>
        </div>
        <form name = {`${form_name}`} method = 'post' action = {`${logon_link}`}>
          
          <div className = 'modal__content' style = {{ display: 'none' }}>
            <input readOnly type = 'text' name = 'Signed_Order_B64' value = {`${Signed_Order_B64}`} />
            <input readOnly type = 'text' name = 'BackLink' value = {`${BackLink}`} />
            <input readOnly type = 'text' name = 'PostLink' value = {`${PostLink}`} />
            <input readOnly type = 'text' name = 'FailurePostLink' value = {`${FailurePostLink}`} />
            <input readOnly type="email" name="email" value={`${email}`} />
          </div>

          <div className = 'modal__footer'>
            <button className = 'button button__over'> Отмена </button>
            <button type = 'submit' value = 'SUBMIT' className = 'button button__continue'> Да </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default AmountModal;