import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faTimes } from '@fortawesome/fontawesome-free-solid';
import './CardCheckList.scss';

function CardCheckList(props) {
    const checklist = props.checklist;
    const [checklistTitle, setChecklistTitle] = useState(checklist.title);

    const onChangeHandler = ({ target }) => {
        const field = target.name;
        const value = target.value;
        if (field === 'title') setChecklistTitle(value);
    }

    const handleChecklistTitleKeypress = (ev) => {
        if (ev.key === "Enter") {
            ev.target.blur();
        }
        else if (ev.key === "Escape") {
            ev.target.value = checklist.title;
        }
    }

    const onUpdateChecklistTitle = (ev) => {
        if (checklist.title === checklistTitle) return;
        if (!checklistTitle) {
            ev.target.value = checklist.title;
            return;
        }
        props.onUpdateChecklistTitle(checklistTitle, checklist.id);
    }

    return (
        <div className="card-checklist">
            <div className="card-details-checklist flex">
                <h3 className="card-details-title">
                    <FontAwesomeIcon className="icon" icon={faTasks} />
                </h3>
                <input
                    type="text"
                    name="title"
                    value={checklistTitle}
                    onChange={onChangeHandler}
                    onKeyUp={handleChecklistTitleKeypress}
                    onBlur={onUpdateChecklistTitle}
                    className="checklist-title flex fs18"
                />
            </div>
            <div className="checklist-list-container">
                {checklist.todos &&
                    <ul>
                        {checklist.todos.map(todo =>
                            <li className="flex fs16" key={todo.id}>
                                <button className="checklist-btn-remove-todo">
                                    <FontAwesomeIcon className="icon fs15" icon={faTimes} />
                                </button>
                                <label className="flex" style={{ "textDecoration": todo.isDone ? "line-through" : "none" }}>
                                    <input
                                        className="checkbox"
                                        type="checkbox"
                                    />
                                    {todo.title}
                                </label>
                            </li>
                        )}
                    </ul>
                }
            </div>
        </div >
    )
}

export default CardCheckList;
