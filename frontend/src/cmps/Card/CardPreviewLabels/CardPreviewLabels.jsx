import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import './CardPreviewLabels.scss';

function CardPreviewLabels(props) {
    const labels = props.labels;
    const [isTitled, setIsTitled] = useState(false);

    const toggleIsTitled = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        setIsTitled(!isTitled);
    }

    const onRemoveLabel = (label, ev) => {
        const labelIdx = labels.findIndex(currLabel => currLabel.id === label.id);
        props.onUpdateCardLabels(labelIdx);
    }

    return (
        <div className={isTitled ? 'labels-open' : 'labels-closed'} >
            <ul className="labels-list flex">
                {
                    labels.map(label =>
                        <li
                            className="li-label clr-btn flex"
                            onClick={toggleIsTitled}
                            style={{ backgroundColor: label.color }}
                            key={label.id}
                        >
                            {label.title}
                            {isTitled &&
                                <button
                                    className="remove-label clr-btn"
                                    onClick={(ev) => onRemoveLabel(label, ev)}
                                >
                                    <FontAwesomeIcon className="icon" icon={faTimes} />
                                </button>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default CardPreviewLabels;
