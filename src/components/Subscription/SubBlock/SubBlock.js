import React from 'react';
import PriceCircle from './PriceCircle';
import Service from './Service';
import cls from './SubBlock.module.css';


const SubBlock = (props) => {
  const [chooseMonth, setChooseMonth] = React.useState(0);

  const handleChooseMonth = (month) => {
    setChooseMonth((prevMonth) => month);
  }

  return (
    <div className={cls.block}>
      <div className={cls.header}>
        <img src={props.sub.image} alt='' />
        <div className={cls.title}> {props.sub.subs_name} </div>
      </div>

      <div className={cls.services__block}>
        {props.sub.services.map((service, index) => (
          <Service
            key = { index }
            service={service} 
          />
        ))}
      </div>
        
      <div className = {cls.money}> {props.sub.moneys[chooseMonth].money} тг/месяц </div>

      <div className={cls.price__number}>
        {props.sub.countMoney.map((number, index) => (
          <PriceCircle
            key = { index }
            index = { index }
            number = { number }

            chooseMonth = { chooseMonth }
            handleChooseMonth = { handleChooseMonth }
          />
        ))}
      </div>
      <div className = {cls.price__description}> Выберите количество месяцев </div>

      <button className={cls.button}>
        Выбрать
      </button>

    </div>
  )
}

export default SubBlock;