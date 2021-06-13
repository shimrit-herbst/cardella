import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPalette } from '@fortawesome/fontawesome-free-solid';
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular';
import './BoardSideMenu.scss';

function BoardSideMenu(props) {
    const [isOpenChangeBgcMenu, setIsOpenChangeBgcMenu] = useState(false);

    const toggleChangeBgcMenu = () => {
        setIsOpenChangeBgcMenu(!isOpenChangeBgcMenu);
    }

    return (
        <div className="side-menu">
            <div className="side-menu-header flex">
                <h3>Menu</h3>
                <div className="side-menu-close-btn flex" onClick={props.toggleSideMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
            <div className="side-menu-nav flex f-col">
                <button className="clr-btn fs16" onClick={props.onRemoveBoard}>
                    <FontAwesomeIcon icon={faTrashAlt} className="icon" /> Delete Board
                </button>
                <button className="clr-btn fs16" onClick={toggleChangeBgcMenu}>
                    <FontAwesomeIcon icon={faPalette} className="icon" /> Change Background
            </button>

            </div>
        </div >
    )
}

export default BoardSideMenu;
