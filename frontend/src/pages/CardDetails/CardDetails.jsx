import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/fontawesome-free-solid';
import './CardDetails.scss';

function CardDetails(props) {
    const listId = props.match.params.listId;
    const cardId = props.match.params.cardId;

    const getListIdxById = (listId) => {
        const board = props.board;
        const listIdx = board.lists.findIndex(list => list.id === listId);
        return listIdx;
    }

    const getCardIdxById = (listId, cardId) => {
        const board = props.board;
        const listIdx = getListIdxById(listId);
        const cardIdx = board.lists[listIdx].cards.findIndex(card => card.id === cardId);
        return cardIdx;
    }

    const card = props.board.lists[getListIdxById(listId)].cards[getCardIdxById(listId, cardId)];
    const list = props.board.lists[getListIdxById(listId)];

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
                    <h5>{list.title}</h5>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;
