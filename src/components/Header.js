import React from 'react';

import logo from '../assets/logo.png';

export default () => {
    return (
        <div className="navbar" >
            <img src={logo} alt="facebook" />
            <div className="avatar-container">
                <span>Meu Perfil</span>
                <i className="material-icons">account_circle</i>
            </div>
        </div>
    );
};