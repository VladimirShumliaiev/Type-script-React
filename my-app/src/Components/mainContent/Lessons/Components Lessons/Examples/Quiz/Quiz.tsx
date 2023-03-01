import React, {FC, useState} from 'react';
import gameList from "./gameList";
import Game from "./Game";
import Result from "./Result";



const Quiz: FC = () => {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    const onClickVariants = (index: number) => {
        setStep(step + 1)

        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }

    const question = gameList[step]


    return (
        <div>
            {
                step !== gameList.length ? <Game question={question} onClickVariants={onClickVariants}/> : <Result correct={correct}/>
            }
        </div>
    );
};

export default Quiz;