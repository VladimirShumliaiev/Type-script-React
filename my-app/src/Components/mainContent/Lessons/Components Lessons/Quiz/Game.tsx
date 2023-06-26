import React, {FC} from 'react';

type Question = {
    id: number
    title: string
    variants: string[]
    correct: number
}

type GameProps = {
    question: Question
    onClickVariant: (index: number) => void
}

const Game: FC<GameProps> = (props) => {
    const {question, onClickVariant} = props


    return (
        <div>
            <h3>{question.title}</h3>
            {
                question.variants.map((e, index )=> <li key={index}><button onClick={() => onClickVariant(index)}>{e}</button></li>)
            }
        </div>
    );
};

export default Game;