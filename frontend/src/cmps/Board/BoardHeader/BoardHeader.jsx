import { useState } from 'react';
import Members from '../../Members/Members';
import './BoardHeader.scss';

function BoardHeader(props) {
    const board = props.board;
    const [boardTitle, setBoardTitle] = useState(board.title);

    const onChangeHandler = (ev) => {
        const value = ev.target.value;
        setBoardTitle(value);
    }

    const handleKeypress = (ev) => {
        if (ev.key === "Enter") {
            ev.target.blur();
        }
        else if (ev.key === "Escape") {
            ev.target.value = board.title;
        }
    }

    const onBoardTitleChange = (ev) => {
        if (board.title === boardTitle) return;
        if (!boardTitle) {
            ev.target.value = board.title;
            return;
        }
        props.onUpdateBoardTitle(boardTitle);
    }

    return (
        <div className="board-header grid">
            <div className="left-board-header flex">
                <input
                    type="text"
                    value={boardTitle}
                    onChange={onChangeHandler}
                    onKeyUp={handleKeypress}
                    onBlur={onBoardTitleChange}
                    className="board-title fs18"
                />
            </div>
            <div className="avatar-board-header flex">
                <Members members={board.members} />
            </div>
        </div>
    )
}

export default BoardHeader;
