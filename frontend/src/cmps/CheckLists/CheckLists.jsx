import CardCheckList from "../Card/CardCheckList/CardCheckList";

function CheckLists(props) {
    const checklists = props.checklists;

    return (
        <div className="checklists">
            {checklists.length &&
                <ul>
                    {checklists.map(checklist =>
                        <li className="check-list-li flex" key={checklist.id}>
                            <CardCheckList {...props} checklist={checklist} />
                            <button className="delete-btn clr-btn">
                                <h5>Delete</h5>
                            </button>
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}

export default CheckLists;
