import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faTimes } from '@fortawesome/fontawesome-free-solid';
import './CardCheckList.scss';

function CardCheckList(props) {
    const checklist = props.checklist;

    return (
        <div className="card-checklist">
            <div className="card-details-checklist flex">
                <h3 className="card-details-title">
                    <FontAwesomeIcon className="icon" icon={faTasks} />
                </h3>
                <h3 className="checklist-title flex fs18">
                    {checklist.title}
                </h3>
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
