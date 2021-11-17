import React from "react";

import './menu.css';


const Menu = () => (
    <div className='menu'>
        <ul className='menu__list'>
            <li className='menu__list-item'>
                <a className="menu__list-link" href="#">100.00 <span>₽</span></a>
            </li>
            <li className='menu__list-item'>
                <a href="" className="menu__list-link">
                    <span className='menu__list-icon' data-count={1}></span>
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