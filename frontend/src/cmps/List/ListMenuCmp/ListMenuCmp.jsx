import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/fontawesome-free-solid';
import './ListMenuCmp.scss';

function ListMenuCmp(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpenListMenu = () => {
        setIsOpen(!isOpen);
    }

    const toggleOpenListMenuAndNewCard = () => {
        toggleOpenListMenu();
        props.toggleOpenNewCard();
    }

    return (
        <div className="list-menu flex">
            <div className="list-open-menu flex" onClick={toggleOpenListMenu}>
                <FontAwesomeIcon className="icon fs13" icon={faEllipsisH} />
            </div>
            {isOpen &&
                <>
                    <div className="list-menu-header flex">
                        <h3 className="fs14">List Actions</h3>
                    </div>
                    <div className="list-menu-content flex fs14">
                        <ul>
                            <li>Delete List</li>
                            <li onClick={toggleOpenListMenuAndNewCard}>Add Card</li>
                        </ul>
                    </div>
                </>}
        </div >
    )
}

export default ListMenuCmp;
