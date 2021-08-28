import CardCheckList from "../Card/CardCheckList/CardCheckList";
import './CheckLists.scss';

function CheckLists(props) {
    const checklists = props.checklists;

    const onUpdateChecklistTitle = (checklistTitle, checklistId) => {
        props.onUpdateChecklistTitle(checklistTitle, checklistId);
    }

    return (
        <div className="checklists">
            <ul>
                {checklists.map(checklist =>
                    <li className="check-list-li flex" key={checklist.id}>
                        <CardCheckList
                            checklist={checklist}
                            onUpdateChecklistTitle={onUpdateChecklistTitle}
                        />
                        <button className="delete-btn clr-btn">
                            <h5 className="fs16">Delete</h5>
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CheckLists;
