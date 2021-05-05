import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../FormControl/FormControl';
import { textRequired } from '../../../validators/validator';



const ReportErrorForm = ({ handleSubmit }) => {
  return (
    <form onSubmit = { handleSubmit }>
      <Field name = 'text' placeholder = 'write error' component = { TextArea } validate = { textRequired } />
      <button className = 'button button__submit' type = 'submit'> Отправить </button>
    </form>
  )
}

const ReportErrorReduxForm = reduxForm({ form: 'report-error' })(ReportErrorForm);

const ReportAnErrorModal = ({ deactivateReportError }) => {
  const onSubmit = () => {

  }

  
  return (
    <div className='modal'>
      <div className='modal__inner modal__inner-setting'>

        <div className='modal__header-setting'>
          <div className='modal__title'> Сообщить о ошибке </div>

          <div onClick={ deactivateReportError }>
            <CloseIcon className='modal__close' />
          </div>
        </div>

        <div className = 'modal__content-setting'>
          <ReportErrorReduxForm onSubmit = { onSubmit }/>
        </div>

      </div>
    </div>
  )
}

export default ReportAnErrorModal;