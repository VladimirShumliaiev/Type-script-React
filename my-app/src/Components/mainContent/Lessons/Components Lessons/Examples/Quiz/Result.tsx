import React, {FC} from 'react';
import style from './Quiz.module.css'


const Result: FC = () => {
    return (
        <div className={style.result}>
            <img src="https://gazeta19.ru/media/k2/items/cache/4e24ef2452a14787a5872b83cf3e3244_XL.jpg" alt=""/>
            <div>
                вы ответили на 0 ответа из 3 вариантов
            </div>
        </div>
    );
};

export default Result;