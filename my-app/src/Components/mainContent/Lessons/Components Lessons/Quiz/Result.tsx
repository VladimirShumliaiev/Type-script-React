import React, {FC} from 'react';
import questionList from "./questionList";

type ResultProps = {
    correct: number
}

const Result: FC<ResultProps> = ({correct}) => {
    return (
        <div>
            <img src="https://www.invictory.org/articles/wp-content/uploads/sites/3/2017/11/say-yes-to-the-live-2121044_1920-715x400.jpg" alt=""/>
            <div>
                <h3>ви відповили на {correct} з {questionList.length} варіантів</h3>
            </div>
            <div>
                <a href="/lessons/quiz">new game</a>
            </div>
        </div>
    );
};

export default Result;