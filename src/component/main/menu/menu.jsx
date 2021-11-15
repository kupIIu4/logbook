import React from "react";

import './menu.css';

import iconNotification from "../../../img/icon_notification.png";

const Menu = () => (
    <div className='menu'>
        <ul className='menu__list'>
            <li className='menu__list-item'>
                <a className="menu__list-link" href="#">100.00 <span>₽</span></a>
            </li>
            <li className='menu__list-item'>
                <a className="menu__list-notification">
                    <img className='menu__list-img' src={iconNotification}/>
                </a>
                <a className="menu__list-link" href="#">vikavishny</a>
            </li>
            <li className='menu__list-item'>
                <a className="menu__list-link" href="#">Выйти</a>
            </li>
        </ul>

    </div>
)

export default Menu;