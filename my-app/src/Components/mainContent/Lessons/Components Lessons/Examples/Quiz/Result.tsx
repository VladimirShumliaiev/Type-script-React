import React, {FC} from 'react';
import gameList from "./gameList";
import style from './Quiz.module.css'

type ResultProp = {
    correct: number
}

const Result: FC<ResultProp> = ({correct}) => {
    return (
        <div className={style.result}>
            <img src="https://gazeta19.ru/media/k2/items/cache/4e24ef2452a14787a5872b83cf3e3244_XL.jpg" alt=""/>
            <div>
                вы ответили на {correct} ответа из {gameList.length} вариантов
            </div>
            <div>
                <a href="examples">
                    <button>New Game</button>
                </a>
                <div>
                    <a href="lessons">
                            back to page
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Result;