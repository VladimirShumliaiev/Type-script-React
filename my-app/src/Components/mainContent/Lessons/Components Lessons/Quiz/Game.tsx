import React, {FC} from 'react';

type QuestionProps = {
    id: number
    title: string
    variants: string[]
    correct: number
}

type GameProps = {
    question: QuestionProps
    onClickVariants: (index: number) => void
}

const Game: FC<GameProps> = ({ question, onClickVariants}) => {
    return (
        <div>
            {question.title}
            {
                question.variants.map((e, index) => <li key={index} onClick={() => onClickVariants(index)}><button>{e}</button></li>)
            }
            
        </div>
    );
};

export default Game;