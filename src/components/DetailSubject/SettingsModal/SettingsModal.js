import React from 'react';
import Switch from '@material-ui/core/Switch';
import CloseIcon from '@material-ui/icons/Close';

const levels = ['Легкий', 'Средний', 'Сложный'];

const SettingsModal = ({ onHandleSettingsModal, handleStartTest }) => {
    const [ chooseLevel, setChooseLevel ] = React.useState(0);
    const [ showHint, setShowHint ] = React.useState(false);
    

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

    const onChangeChooseLevel = (index) => {
        setChooseLevel(index);
    }
    const onChangeShowHint = () => {
        setShowHint(!showHint);
    }

    const hanldeStartButton = () => {
        onHandleSettingsModal(false);
        handleStartTest(showHint, chooseLevel)
    }

    return (
        <div className = 'modal'>
            <div className = 'modal__inner modal__inner-setting'>

                <div className = 'modal__header-setting'> 
                    <div className = 'modal__title'>Настройки тестирования</div> 
                    
                    <div onClick = {() => onHandleSettingsModal(false)}>
                        <CloseIcon className = 'modal__close' />
                    </div>  
                </div>
                
                <div className = 'modal__content-setting'>
                    <div className = 'modal__level-title mb-10'> Уровень сложности: </div>

                    {levels.map((item, index) => {
                         return (
                            <div className = 'modal__level modal__level-pd' key = { index } onClick = {() => onChangeChooseLevel(index)}>
                                <div className = 'modal__level-text'> { item } </div>
                                <input readOnly type="radio" name="level" checked = { chooseLevel === index }/>
                            </div>
                         )
                    })}

                    <div className = 'modal__level' onClick = { onChangeShowHint }>
                        <div className = 'modal__level-title'> Включить подказку </div>
                        <Switch
                            checked={ showHint }
                            onChange = { onChangeShowHint }
                            name="checkedA"
                            style = {{ color: showHint ? '#1A73E8': ''}}
                            color = 'primary'
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
                </div>

                <button className = 'button button__modal' onClick = { hanldeStartButton }> Начать </button>

            </div>
        </div>
    )
}

export default SettingsModal;