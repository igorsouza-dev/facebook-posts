import React from 'react';

import logo from '../assets/logo.png';
import navbarCss from './Navbar.css';
import avatar from '../assets/avatar.png';

export default () => {
    return (
        <div className="navbar" >
            <img src={logo} alt="facebook" />
            <div className="avatar-container">
                <span>Meu Perfil</span><img src={avatar} />
            </div>
        </div>
    );
};