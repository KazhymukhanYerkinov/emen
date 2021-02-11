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



export const InputPassword = ({ input, label, meta: { touched, error, invalid } }) => {

    const [ value, setValue ] = React.useState(false);

    const onSetValue = () => {
        setValue(!value);
    }

    return (
        <div className = {cls.formInput}>
            <OutlinedInput 
             placeholder = { label }
             error = { touched && invalid }
             className = { cls.input }
             type = { value ? 'text':'password' }
             fullWidth
             autoComplete = 'on'
             {...input}
             endAdornment = {
                 <Tooltip arrow title = { value ? 'Скрыть пароль':'Показать пароль'} placement = 'top' >
                    <InputAdornment position = "end">
                        <IconButton
                            aria-label = "toggle password visibility"
                            onClick = { onSetValue }>
                            { value ? <Visibility className = {cls.icon} /> : <VisibilityOff className = {cls.icon} /> }
                            

                        </IconButton>
                    </InputAdornment>
                 </Tooltip>
             }
            />
            { touched && error && <FormHelperText style = {{ color: '#FF564E',  marginLeft: '5px' }}> { error } </FormHelperText> }
        </div>
    )
}

export const InputText = ({ input, label, meta: { touched, error, invalid } }) => {
    return (
        <div className = {cls.formInput}>
            <OutlinedInput 
                error = { touched && invalid }
                placeholder = { label }
                className = { cls.input }
                type = 'text'
                fullWidth
                {...input}
            />

            { touched && error && <FormHelperText style = {{ color: '#FF564E', marginLeft: '5px' }}> {error} </FormHelperText> }
        </div>
    )
}

export const InputCheckBox = ({ input, label }) => {
    return (
        <FormControlLabel
            placeholder = { label }
            className = { cls.formControl }
            {...input}
            control = {
                <Checkbox 
                    className = {cls.checkbox}
                    icon = { <CheckBoxOutlineBlankIcon className = {cls.iconSize} /> }
                    checkedIcon = { <CheckBoxIcon className = {cls.iconSize} /> }
                />
            } 
            label = { <span className = {cls.label}> { label } </span> }
        />
    )
}

export const InputNumber = ({ input }) => {
    
    return (
        <div className = {cls.formControl}>
            <OutlinedInput
                className = {cls.inputNumber}
                inputProps = {{ maxLength: 4 }} 
            />
        </div>
    )
}