import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.item}>
                <input className={style.inputHeader} />
                <button className={style.search}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_search-ltr.svg/1200px-OOjs_UI_icon_search-ltr.svg.png" alt=""/></button>
        </div>
    );
};

export default Header;