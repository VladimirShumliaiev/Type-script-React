import React, {useEffect, useState} from 'react';
import Header from "../Components/Header/Header";
import NavBar from "../Components/navBar/NavBar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.body.setAttribute('theme-data', theme)
    },[theme])


    return (
        <div className="App">
            <div className={'Header'}>
                <Header theme={theme} setTheme={setTheme} />
            </div>
            <div className={'NavBar'}>
                <NavBar/>
            </div>
            <div className={'Main'}>
                <Outlet/>
            </div>
            <div className={'Footer'}>
                Footer
            </div>
        </div>
    );
};

export default Layout;