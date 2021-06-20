import { useState } from 'react';
import './CardPreviewLabels.scss';

function CardPreviewLabels(props) {
    const [isTitled, setIsTitled] = useState(false);
    const labels = props.labels;

    const toggleIsTitled = (ev) => {
        ev.stopPropagation();
        setIsTitled(!isTitled);
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
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default CardPreviewLabels;
