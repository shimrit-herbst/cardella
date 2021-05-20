import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTh } from '@fortawesome/fontawesome-free-solid';
import { BoardsMenu } from '../BoardsMenu/BoardsMenu';
import logo from '../../assets/imgs/logo.png';
import './_AppHeader.scss';

function _AppHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBoardsMenu = () => {
        setIsOpen(!isOpen);
    }

    return <header className="main-header grid">
        <div className="main-header-left flex">
            <Link to="/" className="header-btn fs16"><FontAwesomeIcon icon={faHome} /></Link>
        </div>

        <div className="logo flex">
            <Link to="/"><img src={logo} alt="Cardella" /></Link>
        </div>

        <div className="main-header-right flex">
            <button className="clr-btn header-btn fs16" onClick={toggleBoardsMenu}><FontAwesomeIcon icon={faTh} /> Boards</button>
            {isOpen && <BoardsMenu onToggleBoardsMenu={toggleBoardsMenu} />}
            <Link to="/login" className="header-btn fs16">Login</Link>
        </div>
    </header>
}

export const AppHeader = withRouter(_AppHeader);
