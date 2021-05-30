import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/fontawesome-free-solid';
import { addCard } from '../../../store/actions/boardActions';
import CardPreview from '../../Card/CardPreview/CardPreview';
import ListMenuCmp from '../ListMenuCmp/ListMenuCmp';
import './ListCmp.scss';

function ListCmp({ board, index }) {
    const list = board.lists[index];
    const cards = list.cards;
    const [isOpen, setIsOpen] = useState(false);
    const [isNew, setIsNew] = useState(false);
    const [newCardTitle, setNewCardTitle] = useState('');
    const dispatch = useDispatch();

    const toggleOpenListMenu = () => {
        setIsOpen(!isOpen);
    }

    const onOpenNewCard = () => {
        setIsNew(!isNew);
    }

    const onChangeHandler = (ev) => {
        const value = ev.target.value;
        setNewCardTitle(value);
    }

    useEffect(() => {
        console.log('newCardTitle', newCardTitle);
    }, [newCardTitle]);

    const OnAddCard = (ev) => {
        if (ev.keyCode === 13) {
            dispatch(addCard({ cardTitle: newCardTitle, listId: list.id, board }));
            onOpenNewCard();
            setNewCardTitle('');
        }
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
                {!isNew ?
                    (<button className="add-another-card-btn clr-btn"
                        onClick={onOpenNewCard}
                    >
                        + Add another card
                    </button>) :
                    (<div className="add-card-button-inside clr-btn flex">
                        <input
                            type="text"
                            value={newCardTitle}
                            onChange={onChangeHandler}
                            placeholder="Enter a title for this card..."
                            onKeyUp={OnAddCard}
                        />
                        {/* <div className="add-card-inside-cont flex">
                            <button className="add-card-btn clr-btn" onClick={addCard}>
                                Add card
                        </button>
                            <button className="clr-btn" onClick={onCloseNewCard}>
                                <FontAwesomeIcon className="icon" icon={faTimes} />
                            </button>
                        </div> */}
                    </div>)
                }
            </div >
        </div >
    )
}

export default ListCmp;
