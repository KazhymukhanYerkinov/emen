import React from 'react';
import Switch from '@material-ui/core/Switch';

import cls from './SettingsModal.module.css';

const levels = ['Легкий', 'Средний', 'Сложный'];

const SettingsModal = ({ onChangeShowSettingsModal }) => {
    const [ chooseLevel, setChooseLevel ] = React.useState(0);
    const [ showHint, setShowHint ] = React.useState(false);

    const onChangeChooseLevel = (index) => {
        setChooseLevel(index);
    }
    const onChangeShowHint = () => {
        setShowHint(!showHint);
    }

    return (
        <div className = { cls.modal }>
            <div className = { cls.modal__inner }>


                <span className = {cls.modal__close} onClick = {() => onChangeShowSettingsModal(false)}></span>


                <div className = { cls.modal__title }> Настройки тестирования </div>
                <div className = { cls.modal__content }>
                    <div className = { cls.modal__level__title }> Уровень сложности: </div>

                    {levels.map((item, index) => {
                         return (
                            <div className = { cls.modal__level } key = { index } onClick = {() => onChangeChooseLevel(index)}>
                                <div className = { cls.level__text }> { item } </div>
                                <input readOnly type="radio" name="gender" value="male" checked = { chooseLevel === index }/>
                            </div>
                         )
                    })}

                    <div className = { cls.modal__level } onClick = { onChangeShowHint }>
                        <div className = { cls.level__help }> Включить подказку </div>

                        <Switch
                            className = { cls.switch }
                            checked={ showHint }
                            onChange = { onChangeShowHint }
                            name="checkedA"
                            style = {{ color: showHint ? '#1A73E8': ''}}
                            color = 'primary'
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
                </div>

                <button className = {cls.modal__button} onClick = {() => onChangeShowSettingsModal(false)}> Сохранить </button>

            </div>
        </div>
    )
}

export default SettingsModal;