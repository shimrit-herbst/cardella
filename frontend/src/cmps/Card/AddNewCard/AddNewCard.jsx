import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import './AddNewCard.scss';

function AddNewCard(props) {
    const [newCardTitle, setNewCardTitle] = useState('');

    const onChangeHandler = (ev) => {
        const value = ev.target.value;
        setNewCardTitle(value);
    }

    const handleKeypress = (ev) => {
        if (ev.key === "Enter") {
            props.onAddCard(newCardTitle);
            setNewCardTitle('');
        }
        else if (ev.key === "Escape") {
            props.toggleOpenNewCard();
            setNewCardTitle('');
        }
    }

    const addCardAndClearInput = (newCardTitle) => {
        props.onAddCard(newCardTitle);
        setNewCardTitle('');
    }

    return (
        <div className="add-card-container">
            {!props.isNewCard
                ?
                (<button className="add-another-card-btn clr-btn"
                    onClick={props.toggleOpenNewCard}
                >
                    + Add another card
                </button>)
                :
                (<div className="add-card-button-inside clr-btn flex f-col">
                    <input
                        autoFocus
                        type="text"
                        value={newCardTitle}
                        onChange={onChangeHandler}
                        placeholder="Enter a title for this card..."
                        onKeyUp={handleKeypress}
                        style={(newCardTitle === '') ? { border: '1px solid red' } : null}
                    />
                    <div className="add-card-inside-cont flex">
                        <button className="add-card-btn clr-btn" onClick={() => addCardAndClearInput(newCardTitle)}>
                            Add card
                        </button>
                        <button
                            className="clr-btn"
                            onClick={props.toggleOpenNewCard}
                            onKeyUp={handleKeypress}
                        >
                            <FontAwesomeIcon className="icon" icon={faTimes} />
                        </button>
                    </div>
                </div>)
            }
        </div >
    )
}

export default AddNewCard;
