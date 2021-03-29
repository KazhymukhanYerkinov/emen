import React from 'react';
import cls from './FormControl.module.css';

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



export const InputPassword = ({ isButton, setChangePassword, input, label, meta: { touched, error, invalid } }) => {

  const [value, setValue] = React.useState(false);

  const onSetValue = () => {
    setValue(!value);
  }

  return (
    <div className={cls.formInput}>
      <OutlinedInput
        placeholder={label}
        error={touched && invalid}
        className={cls.input}
        type={value ? 'text' : 'password'}
        fullWidth
        autoComplete='on'
        {...input}
        endAdornment={
          <Tooltip arrow title={value ? 'Скрыть пароль' : 'Показать пароль'} placement='top' >
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={onSetValue}>
                {value ? <Visibility className={cls.icon} /> : <VisibilityOff className={cls.icon} />}


              </IconButton>
            </InputAdornment>
          </Tooltip>
        }
      />
      { touched && error && <FormHelperText style={{ color: '#FF564E', marginLeft: '5px' }}> {error} </FormHelperText>}
      { isButton && <div className={cls.change__password} onClick={() => setChangePassword((prevState) => !prevState)}> Отменить </div>}
    </div>
  )
}

export const InputText = ({ fullWidth, readOnly, setChangePassword, isButton, profile__input, input, label, meta: { touched, error, invalid } }) => {
  return (
    <div className={fullWidth ? cls.fullWidth : cls.formInput}>
      <label> {label} </label>
      <OutlinedInput
        error={touched && invalid}
        placeholder={label}
        readOnly={readOnly}
        className={classNames(cls.input, { 
          [cls.profile__input]: profile__input,
          [cls.mobile__input]: fullWidth,
        })}
        type='text'
        fullWidth
        {...input}
      />

      { touched && error && <FormHelperText style={{ color: '#FF564E', marginLeft: '5px' }}> {error} </FormHelperText>}
      { isButton && <div className={cls.change__password} onClick={() => setChangePassword((prevState) => !prevState)}> Изменить пароль </div>}
    </div>
  )
}

export const InputCheckBox = ({ input, label }) => {
  return (
    <FormControlLabel
      placeholder={label}
      className={cls.formControl}
      {...input}
      control={
        <Checkbox
          style={{ color: "#1A73E8", background: 'none' }}
          className={cls.checkbox}
          icon={<CheckBoxOutlineBlankIcon className={cls.iconSize} />}
          checkedIcon={<CheckBoxIcon className={cls.iconSize} />}
        />
      }
      label={<span className={cls.label}> {label} </span>}
    />
  )
}
