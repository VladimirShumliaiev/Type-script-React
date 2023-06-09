import React, {useState} from 'react';
import questionList from "./questionList";
import Game from "./Game";
import Result from "./Result";


const Quiz = () => {
    const [quiz, setQuiz] = useState(0)
    const [correct, setCorrect] = useState(0)

    const question = questionList[quiz]

    const onClickVariants = (index: number) => {
        setQuiz(quiz + 1)

        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }
    return (
        <div>
            {quiz !== questionList.length ? <Game question={question} onClickVariants={onClickVariants}/> : <Result correct={correct}/>}
        </div>
    );
};

export default Quiz;