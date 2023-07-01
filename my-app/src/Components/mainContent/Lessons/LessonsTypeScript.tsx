import React, {FC} from 'react';
import styles from './LessonsTypeScrypt.module.css'
import LessonsNavLink from "./Components Lessons/Lessons NavLink & Routing/LessonsNavLink/LessonsNavLink";
import LessonsRouting from "./Components Lessons/Lessons NavLink & Routing/Routing Lessons/LessonsRouting";

const LessonsTypeScript: FC = () => {
    return (
        <div className={styles.item}>
            <LessonsNavLink/>
            <hr/>
            <LessonsRouting/>
            <h3>Lessons Page</h3>
            <div className={styles.item}>
                <img src="https://images.unian.net/photos/2020_04/thumb_files/400_0_1588002724-2615.jpg?0.16335044642912266" alt=""/>
            </div>
        </div>
    );
};

export default LessonsTypeScript;