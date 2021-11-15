import React from "react";
import PropTypes from 'prop-types';


import imgLogo from '../../img/logo.png';
import iconUser from '../../img/icon_user.png';
import iconGroup from '../../img/icon_group.png';
import iconDomens from '../../img/icon_domens.png';
import iconHelp from '../../img/icon_help.png';

import './sidebar.css'

const Sidebar = ({title}) => (
    <section className='sidebar'>
        <div className='sidebar__container'>
            <div className="logo">
                <a className="logo_link" href="" >
                    <img className='logo__img' src={imgLogo} alt='Logo image' />
                </a>
            </div>
            <nav className="main-menu">
                <ul className='main-menu__list'>
                    <li className='main-menu__list-item'>
                        <img className='main-menu__icon' src={iconUser}/>
                        <a className="main-menu__link" href="#" >
                            Аккаунт
                        </a>
                    </li>
                    <li className='main-menu__list-item'>
                        <img className='main-menu__icon' src={iconGroup}/>
                        <a className="main-menu__link" href="#" >
                            VPS
                        </a>
                    </li>
                    <li className='main-menu__list-item'>
                        <img className='main-menu__icon' src={iconDomens}/>
                        <a className="main-menu__link" href="#" >
                            Домены
                        </a>
                    </li>
                    <li className='main-menu__list-item main-menu__list-item--active'>
                        <img className='main-menu__icon' src={iconHelp}/>
                        <a className="main-menu__link" href="#" >
                            Бортовой журнал
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
)

Sidebar.propTypes = {
    title: PropTypes.string,
}

Sidebar.defaultProp = {
    title: 'List Task',
}

export default Sidebar;