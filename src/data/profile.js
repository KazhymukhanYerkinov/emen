import { ReactComponent as ProfileComponent } from '../assets/profile/profile.svg';
import { ReactComponent as FollowComponent } from '../assets/profile/follow.svg'; 
import { ReactComponent as HistoryComponent } from '../assets/profile/history.svg'; 
import { ReactComponent as LogoutComponent } from '../assets/profile/logout.svg'; 
import { ReactComponent as SaveComponent } from '../assets/profile/save.svg'; 
import { ReactComponent as StatComponent } from '../assets/profile/statistic.svg'; 
import { ReactComponent as SubjectComponent } from '../assets/profile/subject.svg'; 

export const data = [
    { img: <ProfileComponent />, title: 'Профиль', url: ''},
    { img: <FollowComponent />, title: 'Подписка', url: ''},
    { img: <HistoryComponent />, title: 'Предметы', url: ''},
    { img: <LogoutComponent />, title: 'История', url: ''},
    { img: <SaveComponent />, title: 'Сохраненные', url: ''},
    { img: <StatComponent />, title: 'Статистика', url: ''},
    { img: <SubjectComponent />, title: 'Выйти', url: ''}
]


