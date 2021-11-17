import React from "react";

import imgLogo from '../../assets/icon/logo.svg';

import './sidebar.css'


const Sidebar = () => (
    <section className='sidebar'>
        <div className='sidebar__container'>
            <div className="logo">
                <a className="logo_link" href="/">
                    <img className='logo__img' src={imgLogo} alt='Logo'/>
                </a>
            </div>
            <nav className="main-menu">
                <ul className='main-menu__list'>
                    <li className='main-menu__list-item icon icon__user'>
                        <a className="main-menu__link" href="/" alt="">Аккаунт</a>
                    </li>
                    <li className='main-menu__list-item icon icon__group'>
                        <a className="main-menu__link" href="/" alt="">VPS</a>
                    </li>
                    <li className='main-menu__list-item icon icon__domens'>
                        <a className="main-menu__link" href="/" alt="">Домены</a>
                    </li>
                    <li className='main-menu__list-item main-menu__list-item--active icon icon__help'>
                        <a className="main-menu__link" href="/" alt="">Бортовой журнал </a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
)


export default Sidebar;