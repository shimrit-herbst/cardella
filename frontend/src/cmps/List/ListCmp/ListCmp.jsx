import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/fontawesome-free-solid';
import CardPreview from '../../Card/CardPreview/CardPreview';
import ListMenuCmp from '../ListMenuCmp/ListMenuCmp';
import './ListCmp.scss';

function ListCmp({ board, index }) {
    const list = board.lists[index];
    const cards = list.cards;
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpenListMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="list-container flex">
            <div className="list-header flex f-center">
                <h4 className="list-title flex">{list.title}</h4>
                <div className="list-open-menu flex" onClick={toggleOpenListMenu}>
                    <FontAwesomeIcon className="icon fs13" icon={faEllipsisH} />
                </div>
                {isOpen && <ListMenuCmp list={list} toggleOpenListMenu={toggleOpenListMenu} />}
            </div>
            <div className="list-cards">
                {cards && cards.map(card => <CardPreview card={card} key={card.id} />)}
            </div>

            <div className="add-card-container">
                <button className="add-another-card-btn clr-btn">
                    + Add another card
                </button>
            </div>
        </div>
    )
}

export default ListCmp;
