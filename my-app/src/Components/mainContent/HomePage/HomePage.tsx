import React from 'react';
import style from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={style.item}>
            <h3>Welcome to the home page...</h3>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--oIqU795h--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/1400/1%2AGh4eaAQU432ZQH7qsVbJ_A.png" alt=""/>
        </div>
    );
};

export default HomePage;