import React, {FC} from 'react';

type questionProps = {
    id: number
    title: string
    variants: string[]
    correct: number
}

type GameProps = {
    question: questionProps,
    onClickVariants: (index: number) => void
}

const Game: FC<GameProps> = ({question, onClickVariants}) => {
    return (
        <div>
            <div>
                {question.title}
            </div>
            {question.variants.map((e, index) => <li key={index} onClick={() => onClickVariants(index)}><button>{e}</button></li>)}
        </div>
    );
};

export default Game;