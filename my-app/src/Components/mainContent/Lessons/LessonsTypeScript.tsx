import React, {FC} from 'react';
import styles from './LessonsTypeScrypt.module.css'
import LessonsNavLink from "./Components Lessons/Lessons NavLink & Routing/LessonsNavLink/LessonsNavLink";
import LessonsRouting from "./Components Lessons/Lessons NavLink & Routing/Routing Lessons/LessonsRouting";

const LessonsTypeScript: FC = () => {
    return (
        <div className={styles.item}>
            <LessonsNavLink/>
            <hr/>
            <h3>
                Lessons Lessons
            </h3>
            <LessonsRouting/>
        </div>
    );
};

export default LessonsTypeScript;