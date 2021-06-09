import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../FormControl/FormControl';
import { textRequired } from '../../../validators/validator';
import { useDispatch } from 'react-redux';
import { reportErrorThunk } from '../../../redux/history-reducer';



const ReportErrorForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit = { handleSubmit }>
      { error && <div className = 'modal__success'> { error } </div> }
      <Field name = 'text' placeholder = 'Қатені жазыңыз' component = { TextArea } validate = { textRequired } />
      <button className = 'button button__submit' type = 'submit'> Жіберу </button>
    </form>
  )
}

const ReportErrorReduxForm = reduxForm({ form: 'report-error' })(ReportErrorForm);

const ReportAnErrorModal = ({ question_id, deactivateReportError, is_group }) => {

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    dispatch(reportErrorThunk(question_id, formData.text, is_group))
    
  }

  
  return (
    <div className='modal'>
      <div className='modal__inner modal__inner-setting'>

        <div className='modal__header-setting'>
          <div className='modal__title'> Қате туралы хабарлау </div>

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