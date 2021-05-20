import './BoardHeader.scss';

function BoardHeader({ board }) {
    return (
        <div className="board-header grid">
            <div className="left-board-header flex">
                <h2 className="board-title fs18">{board.title}</h2>
            </div>
        </div>
    )
}

export default BoardHeader;
