import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faTimes } from '@fortawesome/fontawesome-free-solid';
import CardPreviewLabels from '../../cmps/Card/CardPreviewLabels/CardPreviewLabels';
import './CardDetails.scss';

function CardDetails(props) {
    const listId = props.match.params.listId;
    const cardId = props.match.params.cardId;
    const listTitle = props.getListTitleByListId(listId);
    const card = props.getCardByCardId(listId, cardId);

    const onCloseCardModal = (ev) => {
        ev.stopPropagation();
        props.toggleShowCardModal();
        props.history.push('/boards/' + props.boardId);
    }

    return (
        <div className="card-details-container flex">
            <div className="main-area">
                <div className="card-details-title flex fs18">
                    <FontAwesomeIcon icon={faTicketAlt} className="icon fs25" />
                    <input
                        type="text"
                        value={card.title}
                        className="contenteditable-title flex fs23"
                    />
                </div>
                <div className="card-details-in-list flex fs22">
                    <h5>in list:</h5>
                    <h5>{listTitle}</h5>
                </div>
                {card.labels &&
                    <CardPreviewLabels
                        className="card-preview-labels"
                        labels={card.labels}
                    />
                }
            </div>
            <div className="card-details-buttons-area flex f-col">
                <button className="close-card-details flex fs25 clr-btn" onClick={onCloseCardModal}>
                    <FontAwesomeIcon className="icon" icon={faTimes} />
                </button>
            </div>
        </div>
    )
}

export default CardDetails;
