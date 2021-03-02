import React from 'react';
import CategoriesByTheme from './CategoriesByTheme/CategoriesByTheme';

import cls from './DetailContent.module.css';


// Сабақтардың детейл бетінің негізгі контенті
const DetailContent = ({ topics, onHandleSettingsModal }) => {

    console.log("RENDER CONTENT")

    // Категорияларға колапс жасау 
    const [ showCategories, setShowCategories ] = React.useState(null);

    // Тақырып бойынша таңдау, колапс жапқан кезде null тең
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
                {topics.map((item, index) => {
                    return (
                        <CategoriesByTheme 
                            key = { index } 
                            index = { index }
                            topicID = { item.id } 
                            item = { item } 
                            showCategories = { showCategories } 
                            onChangeShowCategories = { onChangeShowCategories }
                            onHandleSettingsModal = { onHandleSettingsModal } />
                        )
                    })}
            </div>
            
        </div>
    )
}

export default React.memo(DetailContent);