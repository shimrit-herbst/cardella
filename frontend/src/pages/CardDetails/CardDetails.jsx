import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faTimes, faPaperclip } from '@fortawesome/fontawesome-free-solid';
import { faFileAlt, faTrashAlt } from '@fortawesome/fontawesome-free-regular';
import moment from 'moment';
import CardPreviewLabels from '../../cmps/Card/CardPreviewLabels/CardPreviewLabels';
import Members from '../../cmps/Members/Members';
import CheckLists from '../../cmps/CheckLists/CheckLists';
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

    const dueDateToShow = () => {
        return moment(card.dueDate).calendar({
            lastDay: "[Yesterday at] HH:mm",
            sameDay: "[Today at] HH:mm",
            nextDay: "[Tomorrow at] HH:mm",
            lastWeek: "[Last] dddd [at] HH:mm",
            nextWeek: "dddd [at] HH:mm",
            sameElse: "DD/MM/YYYY [at] HH:mm",
        });
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
                <div className="card-details-labels">
                    {card.labels &&
                        <CardPreviewLabels
                            labels={card.labels}
                        />
                    }
                </div>
                <div className="members-due-date-container flex">
                    {card.dueDate &&
                        <div className="due-date-container flex f-col">
                            <h5 className="members-due-date-title">Due date:</h5>
                            <h5>{dueDateToShow()}</h5>
                        </div>
                    }
                    {(card.members && card.members.length > 0) &&
                        <div className="members-container flex f-col">
                            <h5 className="members-due-date-title">Members:</h5>
                            <Members members={card.members} />
                        </div>
                    }
                </div>
                <div className="card-details-desc">
                    <h3 className="card-details-title">
                        <FontAwesomeIcon icon={faFileAlt} className="icon fs25" />
                        Description
                    </h3>
                    <textarea
                        type="textarea"
                        placeholder="Add a more detailed description..."
                        value={card.description}
                        className="textarea-input"
                        rows="5"
                        max-rows="6"
                    />
                </div>
                {card.uploadImgUrl &&
                    <div className="card-details-img">
                        <h3 className="card-details-title">
                            <FontAwesomeIcon className="icon" icon={faPaperclip} />
                            Image
                        </h3>
                        <div className="img-delete-container flex f-row">
                            {card.uploadImgUrl ?
                                <img
                                    src={card.uploadImgUrl}
                                    className="uploaded-img"
                                    alt=""
                                /> :
                                <img
                                    src="https://i.pinimg.com/originals/78/e8/26/78e826ca1b9351214dfdd5e47f7e2024.gif"
                                    className="loading-img"
                                    alt=""
                                />
                            }
                            <h5><FontAwesomeIcon icon={faTrashAlt} className="icon fs25" /></h5>
                        </div>
                    </div>
                }
                {card.checklists &&
                    <CheckLists checklists={card.checklists} />
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
