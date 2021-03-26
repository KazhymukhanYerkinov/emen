import { ReactComponent as User } from '../assets/profile__logo/user.svg';
import { ReactComponent as Subscribe } from '../assets/profile__logo/subscribe.svg';
import { ReactComponent as Test } from '../assets/profile__logo/test.svg';
import { ReactComponent as Statistics } from '../assets/profile__logo/statistics.svg';
import { ReactComponent as Save } from '../assets/profile__logo/save.svg';
import { ReactComponent as History } from '../assets/profile__logo/history.svg';
import { ReactComponent as Logout } from '../assets/profile__logo/logout.svg'

export const data = [
    { img: <User />, title: 'Профиль', url: 'profile'},
    { img: <Subscribe />, title: 'Подписка', url: 'subscription'},
    { img: <Test />, title: 'Тестирование', url: 'subjects'},
    { img: <Statistics />, title: 'Статистика', url: 'statistics'},
    { img: <Save />, title: 'Сохраненные', url: 'save'},
    { img: <History />, title: 'История', url: 'history'},
    
    
]
export const exit = { img: <Logout />, title: 'Выйти'}


