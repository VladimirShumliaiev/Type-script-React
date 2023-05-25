import React, {FC} from 'react';

type Question = {
    id: number,
    title: string,
    variants: string[],
    correct: number
}

type GameProps = {
    question: Question
    onClickVariants: (index: number) => void
}

const Game: FC<GameProps> = (props) => {
    const {question, onClickVariants} = props
    return (
        <div>
            <div>
                {question.title}
            </div>
            {
                question.variants.map((e, index) => <li key={index} onClick={() => onClickVariants(index)}><button>{e}</button></li>)
            }
        </div>
    );
};

export default Game;