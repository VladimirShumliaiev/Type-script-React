import React, {FC} from 'react';
import style from './Quiz.module.css'

type Question = {
    id: number
    title: string
    variants: string[]
    correct: number
}

type GameProp = {
    question: Question
    onClickVariants: (index: number) => void
}

const Game: FC<GameProp> = ({onClickVariants, question }) => {
    return (
        <div>
            {question.title}
            {
                question.variants.map((e, index) => <div><button className={style.button} onClick={() => onClickVariants(index)}>{e}</button></div>)
            }
        </div>
    );
};

export default Game;