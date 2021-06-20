import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular';
import './CardPreview.scss';

function CardPreview(props) {
    const card = props.card;
    const history = useHistory();

    return (
        <Link to={`${history.location.pathname}/list/${props.listId}/card/${card.id}`}>
            <div
                className="card-preview-container flex f-col"
                style={{ backgroundColor: card.style.bgColor }}
                onClick={props.toggleShowCardModal}
            >
                {card.uploadImgUrl && <img src={card.uploadImgUrl} alt="" />}
                <div className="card-content flex fs-14">
                    <div className="card-title-delete flex">
                        <p className="card-title">{card.title}</p>
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            onClick={() => props.onRemoveCard(card.id)}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardPreview;
