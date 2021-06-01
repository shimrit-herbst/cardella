import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faTimes } from '@fortawesome/fontawesome-free-solid';
import CardPreview from '../../Card/CardPreview/CardPreview';
import ListMenuCmp from '../ListMenuCmp/ListMenuCmp';
import './ListCmp.scss';

function ListCmp(props) {
    const list = props.board.lists[props.index];
    const cards = list.cards;
    const [isOpen, setIsOpen] = useState(false);
    const [isNewCard, setIsNewCard] = useState(false);
    const [newCardTitle, setNewCardTitle] = useState('');

    const toggleOpenListMenu = () => {
        setIsOpen(!isOpen);
    }

    const onOpenNewCard = () => {
        setIsNewCard(!isNewCard);
    }

    const onCloseNewCard = () => {
        setIsNewCard(!isNewCard);
    }

    const onChangeHandler = (ev) => {
        const value = ev.target.value;
        setNewCardTitle(value);
    }

    const onAddCard = () => {
        if (newCardTitle === '') return;
        props.onAddCard(newCardTitle, list.id)
        onOpenNewCard();
        setNewCardTitle('');
    }

    const handleKeypress = (ev) => {
        if (ev.key === "Enter") {
            onAddCard()
        }
    };

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
                {!isNewCard ?
                    (<button className="add-another-card-btn clr-btn"
                        onClick={onOpenNewCard}
                    >
                        + Add another card
                    </button>) :
                    (<div className="add-card-button-inside clr-btn flex f-col">
                        <input
                            type="text"
                            value={newCardTitle}
                            onChange={onChangeHandler}
                            placeholder="Enter a title for this card..."
                            onKeyUp={handleKeypress}
                            style={(newCardTitle === '') ? { border: '1px solid red' } : null}
                        />
                        <div className="add-card-inside-cont flex">
                            <button className="add-card-btn clr-btn" onClick={onAddCard}>
                                Add card
                        </button>
                            <button className="clr-btn" onClick={onCloseNewCard}>
                                <FontAwesomeIcon className="icon" icon={faTimes} />
                            </button>
                        </div>
                    </div>)
                }
            </div >
        </div >
    )
}

export default ListCmp;
