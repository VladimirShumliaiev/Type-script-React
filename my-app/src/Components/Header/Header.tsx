import React from 'react';
import style from './Header.module.css'
import Menu from "./Header componnets/Menu";

const Header = () => {
    return (
        <div className={style.item}>
            <Menu/>
                <input className={style.inputHeader} placeholder={'add text...'} />
                <button className={style.search}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_search-ltr.svg/1200px-OOjs_UI_icon_search-ltr.svg.png" alt=""/></button>
        </div>
    );
};

export default Header;