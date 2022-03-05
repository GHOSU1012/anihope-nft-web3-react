import React from 'react';

class Try extends React.Component {
    render() {
        return (
            <div role="banner" className="header">
                <div className="header-container">
                    <div className="logo-container">
                        <a href="#">
                            <img src="/images/logo/logo-light.png" alt="AniHope Official Logo"/>
                        </a>
                    </div>
                    <div className="burger-container">
                        <div className="line-top"></div>
                        <div className="line-bottom"></div>
                    </div>
                    <div className="icons-container">
                        <a href="#">
                            <img src="/images/icons/discord.svg" alt="Discord"/>
                        </a>
                        <a href="#">
                            <img src="/images/icons/twitter.svg" alt="Twitter"/>
                        </a>
                        <a href="#">
                            <img src="/images/icons/instagram.svg" alt="Instagram"/>
                        </a>
                    </div>
                </div>
                <nav className="navbar">
                    <div className="nav-list-container">
                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <a href="#home" className="navbar-link">Anihope</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#collection" className="navbar-link">Collection</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#roadmap" className="navbar-link">Roadmap</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#team" className="navbar-link">Team</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#faq" className="navbar-link">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Try;