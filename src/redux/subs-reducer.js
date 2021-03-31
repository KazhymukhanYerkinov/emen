import standart from '../assets/subs/standart.svg';
import premium from '../assets/subs/premium.svg';
import gold from '../assets/subs/gold.svg';

let initialState = {
  subs: [
    {
      id: 1, 
      subs_name: 'Базовый',
      image: standart,
      services: [
        { id: 1, service_name: 'Ограниченное количество тестирований' },
        { id: 2, service_name: 'Без возможности скачивания варианты' },
        { id: 3, service_name: 'Без возможности сохранения в избранное' },
        { id: 4, service_name: 'Без просмотра статистики' },
      ],
      moneys: [
        {id: 1, money: 990},
        {id: 2, money: 1990},
        {id: 3, money: 3990},
      ],
      countMoney: [1,2,3],
    },
    {
      id: 2, 
      subs_name: 'Премиум',
      image: premium,
      services: [
        { id: 1, service_name: 'Ограниченное количество тестирований' },
        { id: 2, service_name: 'Без возможности скачивания варианты' },
        { id: 3, service_name: 'Без возможности сохранения в избранное' },
        { id: 4, service_name: 'Без просмотра статистики' },
      ],
      moneys: [
        {id: 1, money: 990},
        {id: 2, money: 1990},
        {id: 3, money: 3990},
      ],
      countMoney: [1,2,3],
    },
    {
      id: 3, 
      subs_name: 'Cтандарт',
      image: gold,
      services: [
        { id: 1, service_name: 'Ограниченное количество тестирований' },
        { id: 2, service_name: 'Без возможности скачивания варианты' },
        { id: 3, service_name: 'Без возможности сохранения в избранное' },
        { id: 4, service_name: 'Без просмотра статистики' },
      ],
      moneys: [
        {id: 1, money: 990},
        {id: 2, money: 1990},
        {id: 3, money: 3990},
      ],
      countMoney: [1,2,3],
    },
  ],
  text_list: [
    {id: 1, first: 'Cтоимость', standart: 'от 990 тг/месяц', premium: 'от 990 тг/месяц', gold: 'от 990 тг/месяц'},
    {id: 2, first: 'Количество тестирований', standart: 'до 10 в месяц', premium: 'неограниченное', gold: 'до 20 в месяц'},
  ],
  type_list: [
    {id: 1, first: 'Возможность скачивание', standart: false, premium: true, gold: true},
    {id: 2, first: 'Возможность скачивание', standart: false, premium: true, gold: true},
    {id: 3, first: 'Возможность скачивание', standart: false, premium: true, gold: true}, 
  ]
}

const subsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default subsReducer;