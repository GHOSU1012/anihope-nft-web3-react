import React from 'react';

const Righter = () => {

    const navbarToggle = () => {
        let burger = document.querySelector('.burger-container');
        let header = document.querySelector('.header');
        let navbarList = document.querySelector('.nav-list-container');

        burger.classList.toggle('active');
        header.classList.toggle('active');
        navbarList.classList.toggle('active');
    };

    return (
        <div role="banner" className="header">
            <div className="header-container">
                <div className="logo-container">
                    <a href="#">
                        <img src="/images/logo/logo-light.png" alt="AniHope Official Logo" />
                    </a>
                </div>
                <div className="burger-container" onClick={navbarToggle}>
                    <div className="line-top"></div>
                    <div className="line-bottom"></div>
                </div>
                <div className="icons-container">
                    <a href="#">
                        <img src="/images/icons/discord.svg" alt="Discord" />
                    </a>
                    <a href="#">
                        <img src="/images/icons/twitter.svg" alt="Twitter" />
                    </a>
                    <a href="#">
                        <img src="/images/icons/instagram.svg" alt="Instagram" />
                    </a>
                </div>
            </div>
            <nav className="navbar">
                <div className="nav-list-container">
                    <ul className="navbar-list">
                        <li className="navbar-item" onClick={navbarToggle}>
                            <a href="#home" className="navbar-link" style={{ fontFamily: 'inherit' }}>Anihope</a>
                        </li>
                        <li className="navbar-item" onClick={navbarToggle}>
                            <a href="#collection" className="navbar-link" style={{ fontFamily: 'inherit' }}>Collection</a>
                        </li>
                        <li className="navbar-item" onClick={navbarToggle}>
                            <a href="#roadmap" className="navbar-link" style={{ fontFamily: 'inherit' }}>Roadmap</a>
                        </li>
                        <li className="navbar-item" onClick={navbarToggle}>
                            <a href="#team" className="navbar-link" style={{ fontFamily: 'inherit' }}>Team</a>
                        </li>
                        <li className="navbar-item" onClick={navbarToggle}>
                            <a href="#faq" className="navbar-link" style={{ fontFamily: 'inherit' }}>FAQ</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Righter;