import React, {FC} from 'react';
import styles from './LessonsTypeScrypt.module.css'
import LessonsNavLink from "./Components Lessons/LessonsNavLink/LessonsNavLink";
import LessonsRouting from "./Components Lessons/Routing Lessons/LessonsRouting";

const LessonsTypeScript: FC = () => {
    return (
        <div className={styles.item}>
            <LessonsNavLink/>
            <hr/>
            <LessonsRouting/>
        </div>
    );
};

export default LessonsTypeScript;