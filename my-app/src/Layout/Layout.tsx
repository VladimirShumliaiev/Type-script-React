import React from 'react';
import Header from "../Components/Header/Header";
import NavBar from "../Components/navBar/NavBar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="App">
            <div className={'Header'}>
                <Header/>

            </div>
            <div className={'NavBar'}>
                <NavBar/>
            </div>

            <div className={'Main'}>
                <Outlet/>
            </div>
            <div className={'Footer'}>
                hi
            </div>
        </div>
    );
};

export default Layout;