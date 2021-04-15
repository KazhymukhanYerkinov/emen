import React from 'react';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import classNames from 'classnames';




export const InputPassword = ({ 
  full_width,
  half_width,
  isButton,
  setChangePassword, 
  input, 
  label, 
  not_label,
  meta: { touched, error, invalid } }) => {

  const [value, setValue] = React.useState(false);

  const onSetValue = () => {
    setValue(!value);
  }


  const control_class = classNames('control',{
    'control--half_width': half_width,
    'control--full_width': full_width
  })

  return (
    <div className = {control_class}>
      {not_label && <label> {label} </label>}
      <OutlinedInput
        placeholder={label}
        error={touched && invalid}
        className='input'
        type={value ? 'text' : 'password'}
        autoComplete='on'
        {...input}
        endAdornment={
          <Tooltip arrow title={value ? 'Скрыть пароль' : 'Показать пароль'} placement='top' >
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={onSetValue}>
                {value ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          </Tooltip>
        }
      />
      { touched && error && <FormHelperText style={{ color: '#FF564E', marginLeft: '5px' }}> {error} </FormHelperText>}
      { isButton && <div className='helper_text' onClick={ setChangePassword }> Отменить </div>}
    </div>
  )
}

export const InputText = ({ 
  full_width, 
  half_width, 
  not_label,
  setChangePassword, 
  isButton, 
  input, 
  label,
  readOnly,
  placeholder,
  meta: { touched, error, invalid } }) => {

  const control_class = classNames('control', {
    'control--half_width': half_width,
    'control--full_width': full_width
  });

  return (
    <div className={control_class}>
      {not_label && <label> {label} </label>}
      <OutlinedInput
        readOnly = { readOnly }
        error={touched && invalid}
        placeholder={ placeholder }
        className='input'
        type='text'
        {...input}
      />

      { touched && error && <FormHelperText style={{ color: '#FF564E', marginLeft: '5px' }}> {error} </FormHelperText>}
      { isButton && <div className={'helper_text'} onClick={ setChangePassword }> Изменить пароль </div>}
    </div>
  )
}

export const InputCheckBox = ({ 
  input, 
  label }) => {

  return (
    <FormControlLabel
      placeholder={label}
      {...input}
      control={
        <Checkbox
          style={{ color: "#1A73E8", background: 'none' }}
          icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={<CheckBoxIcon />}
        />
      }
      label={<span> {label} </span>}
    />
  )
}


export const InputSelect = ({ input, meta, children, half_width, full_width, label }) => {

  const hasError = meta.touched && meta.error;

  const control_class = classNames('control', {
    'control--half_width': half_width,
    'control--full_width': full_width
  });

  return (
    <div className = {control_class}>
      <label> {label} </label>
      <select {...input} className = 'input input__select'>
        { children }
      </select>
      { hasError && <FormHelperText style={{ color: '#FF564E', marginLeft: '5px' }}> {meta.error} </FormHelperText>}
    </div>
  )
}
