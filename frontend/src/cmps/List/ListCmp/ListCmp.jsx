import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/fontawesome-free-solid';
import CardPreview from '../../Card/CardPreview/CardPreview';
import './ListCmp.scss';

function ListCmp({ board, index }) {
    const list = board.lists[index];
    const cards = list.cards;
    return (
        <div className="list-container flex">
            <div className="list-header flex f-center">
                <h4 className="list-title flex">{list.title}</h4>
                <div class="list-open-menu flex">
                    <FontAwesomeIcon className="icon fs13" icon={faEllipsisH} />
                </div>
            </div>
            <div className="list-cards">
                {cards && cards.map(card => <CardPreview card={card} key={card.id} />)}
            </div>
        </div>
    )
}

export default ListCmp;
