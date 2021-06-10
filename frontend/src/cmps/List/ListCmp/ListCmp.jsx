import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/fontawesome-free-solid';
import CardPreview from '../../Card/CardPreview/CardPreview';
import ListMenuCmp from '../ListMenuCmp/ListMenuCmp';
import AddNewCard from '../../Card/AddNewCard/AddNewCard';
import './ListCmp.scss';

function ListCmp(props) {
    const list = props.board.lists[props.index];
    const cards = list.cards;
    const [isOpen, setIsOpen] = useState(false);
    const [isNewCard, setIsNewCard] = useState(false);
    const [listTitle, setListTitle] = useState(list.title);

    const toggleOpenNewCard = () => {
        setIsNewCard(!isNewCard);
    }

    const toggleOpenListMenu = () => {
        setIsOpen(!isOpen);
    }

    const onChangeHandler = (ev) => {
        const value = ev.target.value;
        setListTitle(value);
    }

    const handleKeypress = (ev) => {
        if (ev.key === "Enter") {
            ev.target.blur();
        }
        else if (ev.key === "Escape") {
            ev.target.value = list.title;
        }
    }

    const onAddCard = (newCardTitle) => {
        props.onAddCard(newCardTitle, list.id)
        toggleOpenNewCard();
    }

    const onListTitleChange = (ev) => {
        if (list.title === listTitle) return;
        if (!listTitle) {
            ev.target.value = list.title;
            return;
        }
        props.onUpdateListTitle(listTitle, list.id);
    }

    const onRemoveCard = (cardId) => {
        props.onRemoveCard(cardId, list.id)
    }

    const onRemoveList = () => {
        props.onRemoveList(list.id);
    }


    return (
        <div className="list-container flex f-col">
            <div className="list-header flex f-center">
                <input
                    type="text"
                    value={listTitle}
                    onChange={onChangeHandler}
                    onKeyUp={handleKeypress}
                    onBlur={onListTitleChange}
                    className="list-title flex"
                />
                <div className="list-open-menu flex" onClick={toggleOpenListMenu}>
                    <FontAwesomeIcon className="icon fs13" icon={faEllipsisH} />
                </div>
                {isOpen &&
                    <ListMenuCmp
                        toggleOpenNewCard={toggleOpenNewCard}
                        toggleOpenListMenu={toggleOpenListMenu}
                        onRemoveList={onRemoveList}
                    />}
            </div>
            <div className="list-cards">
                {cards.map(card =>
                    <CardPreview
                        card={card}
                        onRemoveCard={onRemoveCard}
                        key={card.id}
                    />)}
            </div>
            <AddNewCard
                toggleOpenNewCard={toggleOpenNewCard}
                isNewCard={isNewCard}
                onAddCard={onAddCard}
            />

        </div >
    )
}

export default ListCmp;
