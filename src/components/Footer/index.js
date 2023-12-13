import React from 'react';
import s from './Footer.module.css'
import Insta from '../../media/ic-instagram.svg'
import WA from '../../media/ic-whatsapp.svg'

const Footer = () => {
    return (
        <footer className={`${s.footer}`}>
            <h2>Contact</h2>
            <div className={`${s.info_bar_field}`}>
                <div className={`${s.info_bar_big}`}>
                    <div className={`${s.info_title}`}>Phone</div>
                    <div className={`${s.info_text}`}>+7 (499) 350-66-04</div>
                </div>
                <div className={`${s.info_bar_small}`}>
                    <div className={`${s.info_title}`}>Social</div>
                    <div className={`${s.info_text}`}><img src={Insta} /> <img src={WA} /></div>
                </div>
            </div>
            <div className={`${s.info_bar_field}`}>
                <div className={`${s.info_bar_big}`}>
                    <div className={`${s.info_title}`}>Addres</div>
                    <div className={`${s.info_text}`}>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</div>
                </div>
                <div className={`${s.info_bar_small}`}>
                    <div className={`${s.info_title}`}>Working Hours</div>
                    <div className={`${s.info_text}`}>24 hours a day</div>
                </div>
            </div>
            <div className={`${s.map_space}`}>
                <iframe width='100%' height="350" frameBorder="0" title='map' src="https://maps.google.com/maps?width=100%%26amp;height=350&amp;hl=en&amp;q=Ithub%20college,%20Дубининская%20ул.,%2096,%20Москва,%20115093+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </footer>
    );
};

export default Footer;