import React from "react";

import './footer.css'

const Footer = () => (
    <section className='footer'>
        <div className="footer__container">
            <div className="footer__left">
                <p className="footer__left-text">
                    © 2001– 2018 ООО&nbsp;
                    <a className="footer__left-link" href="#">«СпейсВэб» </a>
                </p>
                <p className="footer__left-text">Все права защищены.</p>
                <p className="footer__left-text">
                    Лицензия&nbsp;
                    <a className="footer__left-link" href="#">№163230</a>
                </p>
            </div>
            <div className="footer__right">
                <p className="footer__right-text">
                    <a href="tel:+78123341222" className="footer__right-link">+7 (812) 334-12-22</a>
                    &nbsp;(в Санкт-Петербурге)
                </p>
                <p className="footer__right-text">
                    <a href="tel:+74956631612" className="footer__right-link">+7 (495) 663-16-12</a>
                    &nbsp;(в Москве)
                </p>
                <p className="footer__right-text">
                    <a href="tel:8001001615" className="footer__right-link">(800) 100-16-15</a>
                    &nbsp;(бесплатно по России)
                </p>
            </div>
        </div>
    </section>
)

export default Footer;