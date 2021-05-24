import './CardPreview.scss';

function CardPreview({ card }) {
    return (
        <div className="card-preview-container" style={{ backgroundColor: card.style.bgColor }}>
            {card.uploadImgUrl && <img src={card.uploadImgUrl} alt="" />}
            <div className="card-content fs-14">
                <h4>{card.title}</h4>
            </div>
        </div>
    )
}

export default CardPreview;
