import React from 'react';
import { data } from '../../../data/detail';
import CategoriesByTheme from './CategoriesByTheme/CategoriesByTheme';

import cls from './DetailContent.module.css';



const DetailContent = () => {

    const [ showCategories, setShowCategories ] = React.useState(null);

    const onChangeShowCategories = (index) => {
        setShowCategories((prevState) =>{
            if (prevState === index) {
                return null;
            }
            return index;
        });
    }


    return (
        <div className = {cls.content}>
            <div className = { cls.content__title }> Каталог заданий по темам </div>
            <div className = { cls.content__desc }> Выберите нужную тему для выполнения заданий определенной тематики. Это позволит вам подготовиться к определенной теме. </div>
            
            <div className = {cls.table}>
                <div className = {cls.table__header}>
                    <div className = {cls.table__flex}>
                        <div className = {cls.table__theme}> Тема </div>
                        <div className = { cls.table__counts }> Решено </div>
                    </div>
                    <div className = { cls.arrow }>  </div>
                </div>
                {data.map((items, index) => <CategoriesByTheme key = { index } index = { index } 
                                                showCategories = { showCategories } {...items} 
                                                onChangeShowCategories = { onChangeShowCategories } />)}
            </div>
            
        </div>
    )
}

export default DetailContent;