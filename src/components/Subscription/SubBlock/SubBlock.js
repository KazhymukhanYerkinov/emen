import React from 'react';
import PriceCircle from './PriceCircle';
import Service from './Service';
import cls from './SubBlock.module.css';


const SubBlock = (props) => {
  const [chooseMonth, setChooseMonth] = React.useState(props.sub.per_month_price);

  const handleChooseMonth = (month) => {
    setChooseMonth(month);
  }
  
  return (
    <div className={cls.block}>
      <div className={cls.header}>
        <img src={props.BASE_URL + '' + props.sub.logo} alt='' />
        <div className={cls.title}> {props.sub.name} </div>
      </div>

      <div className={cls.services__block}>
          <Service name = { props.sub.mini_description_1 } />
          <Service name = { props.sub.mini_description_2 } />
          <Service name = { props.sub.mini_description_3 } />
          <Service name = { props.sub.mini_description_4 } />
      </div>
        
      <div className = {cls.money}> { chooseMonth } тг/месяц </div>

      <div className={cls.price__number}>
          <PriceCircle
            number = { 1 }
            per_months_price = { props.sub.per_month_price }
            chooseMonth = { chooseMonth }
            handleChooseMonth = { handleChooseMonth }
          />

          <PriceCircle
            number = { 2 }
            per_months_price = { props.sub.per_3_months_price }
            chooseMonth = { chooseMonth }
            handleChooseMonth = { handleChooseMonth }
          />

          <PriceCircle
            number = { 3 }
            per_months_price = { props.sub.per_9_months_price }
            chooseMonth = { chooseMonth }
            handleChooseMonth = { handleChooseMonth }
          />
      </div>
      <div className = {cls.price__description}> Выберите количество месяцев </div>

      <button className = 'button button__submit mt-10'>
        Выбрать
      </button>

    </div>
  )
}

export default SubBlock;