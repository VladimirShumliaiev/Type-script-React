import React, {FC} from 'react';
import style from './Header.module.css'
import Menu from "./Header componnets/Menu";

type Header = {
    theme: string
    setTheme: (str: string) => void
}

const Header: FC<Header> = ({theme, setTheme}) => {

   const onclickHandler = () => {
       setTheme(theme === 'light' ? 'dark' : 'light')
   }

    return (
        <div className={style.item}>
            <Menu/>
                <input className={style.inputHeader} placeholder={'add text...'} />
                <button className={style.search}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_search-ltr.svg/1200px-OOjs_UI_icon_search-ltr.svg.png" alt=""/></button>
            <button onClick={onclickHandler} className={style.themeButton}>theme</button>
        </div>
    );
};

export default Header;