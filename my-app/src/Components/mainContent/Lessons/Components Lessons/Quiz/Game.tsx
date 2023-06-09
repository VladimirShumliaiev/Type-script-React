import React, {FC} from 'react';

type Question = {
    id: number
    title: string
    variants: string[]
    correct: number
}

type GameProps = {
    question: Question
    onClickVariants: (index: number) => void
}

const Game:FC<GameProps> = (props) => {
    const {question, onClickVariants} = props

    return (
        <div>
            <h3>{question.title}</h3>
            {
                question.variants.map((e,index) => <li key={e}><button onClick={() => onClickVariants(index)}>{e}</button></li>)
            }
        </div>
    );
};

export default Game;