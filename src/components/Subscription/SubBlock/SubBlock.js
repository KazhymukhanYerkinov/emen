import React from 'react';
import SubsModal from '../../common/Modal/SubsModal';
import PriceCircle from './PriceCircle';
import Service from './Service';
import cls from './SubBlock.module.css';


const SubBlock = (props) => {
  const [chooseMonth, setChooseMonth] = React.useState(1);
  const [openModal, setOpenModal] = React.useState(null);


  const handleOpenModal = (item) => {
    setOpenModal(item);
  }

  const handleChooseMonth = (month) => {
    setChooseMonth(month);
  }

  const handlePostSubs = (uid, not_care) => {
    setOpenModal(null)
    
    props.handleBody(uid, chooseMonth)
    props.postSubs(uid, not_care, chooseMonth);
    
  }

  return (
    <div className={cls.block}>
      <div className={cls.header}>
        <img src={props.BASE_URL + '' + props.sub.logo} alt='' />
        <div className={cls.title}> {props.sub.name} </div>
      </div>

      <div className={cls.services__block}>
        <Service name={props.sub.mini_description_1} />
        <Service name={props.sub.mini_description_2} />
        <Service name={props.sub.mini_description_3} />
        <Service name={props.sub.mini_description_4} />
      </div>

      <div className={cls.money}>
        {chooseMonth === 1
          ? props.sub.per_month_price
          : chooseMonth === 3
            ? props.sub.per_3_months_price
            : props.sub.per_9_months_price} тг/месяц
      </div>

      <div className={cls.price__number}>
        <PriceCircle
          number={1}
          per_months_price={props.sub.per_month_price}
          chooseMonth={chooseMonth}
          handleChooseMonth={handleChooseMonth}
        />

        <PriceCircle
          number={3}
          per_months_price={props.sub.per_3_months_price}
          chooseMonth={chooseMonth}
          handleChooseMonth={handleChooseMonth}
        />

        <PriceCircle
          number={9}
          per_months_price={props.sub.per_9_months_price}
          chooseMonth={chooseMonth}
          handleChooseMonth={handleChooseMonth}
        />
      </div>
      <div className={cls.price__description}> Выберите количество месяцев </div>

      <button className='button button__submit mt-10' onClick={() => handleOpenModal(props.sub)}>
        Выбрать
      </button>

      { openModal &&
        <SubsModal
          openModal={openModal}
          handleOpenModal={handleOpenModal}
          handlePostSubs = { handlePostSubs }
        />}
    </div>
  )
}

export default SubBlock;