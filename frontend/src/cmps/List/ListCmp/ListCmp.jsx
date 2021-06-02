import { useState } from 'react';
import ContentEditable from 'react-contenteditable';
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

    const toggleOpenNewCard = () => {
        setIsNewCard(!isNewCard);
    }
    const toggleOpenListMenu = () => {
        setIsOpen(!isOpen);
    }

    const onAddCard = (newCardTitle) => {
        if (newCardTitle === '') return;
        props.onAddCard(newCardTitle, list.id)
        toggleOpenNewCard();
    }

    const onListTitleChange = (ev) => {
        if (list.title === ev.target.innerText) return;
        if (!ev.target.innerText) {
            ev.target.innerText = list.title;
            return;
        }
        console.log('here');
        const newListTitle = ev.target.innerText;
        props.onUpdateListTitle(newListTitle, list);
    }

    return (
        <div className="list-container flex">
            <div className="list-header flex f-center">
                <ContentEditable
                    html={`<h4>${list.title}</h4>`}
                    onChange={onListTitleChange}
                    className="list-title flex"
                >
                </ContentEditable>
                <div className="list-open-menu flex" onClick={toggleOpenListMenu}>
                    <FontAwesomeIcon className="icon fs13" icon={faEllipsisH} />
                </div>
                {isOpen &&
                    <ListMenuCmp
                        toggleOpenNewCard={toggleOpenNewCard}
                        toggleOpenListMenu={toggleOpenListMenu}
                    />}
            </div>
            <div className="list-cards">
                {cards && cards.map(card => <CardPreview card={card} key={card.id} />)}
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
