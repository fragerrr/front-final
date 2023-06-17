import React, {useState} from 'react';
import HeaderItem from "./HeaderItem";
import header from "./css/Header.module.css"
import {useNavigate} from "react-router";


const Header = () => {
    const navigate = useNavigate()

    const red = () => {
        navigate('/')
    }

    return (
        <header className={header.header}>
            <div className={header.logo}>
                <p className={header.name}><a className={header.name} onClick={red}>Buy&Joy</a></p>
            </div>
            <nav className={header.nav}>
                <ul>
                    <HeaderItem link="/" text="Главная"/>
                    <HeaderItem link="/search" text="Товары"/>
                    <HeaderItem link="/cart" text="Корзина"/>
                    <HeaderItem link="/about" text="О нас"/>
                </ul>
            </nav>
        </header>
    );
};

export default Header;