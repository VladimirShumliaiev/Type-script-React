import React, {useState} from 'react';
import questionList from "./questionList";
import Game from "./Game";
import Result from "./Result";

const Quiz = () => {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    const onClickVariants = (index: number): void => {
        setStep(step + 1)
        if (index === questions.correct) {
                setCorrect(correct + 1)
        }
    }

    const questions = questionList[step]

    return (
        <div>
            {step !== questionList.length ? <Game question={questions} onClickVariants={onClickVariants}/> : <Result correct={correct}/>}
        </div>
    );
};

export default Quiz;