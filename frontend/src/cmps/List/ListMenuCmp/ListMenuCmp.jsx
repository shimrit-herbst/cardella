import './ListMenuCmp.scss';

function ListMenuCmp(props) {
    const toggleOpenListMenuAndNewCard = () => {
        props.toggleOpenListMenu();
        props.toggleOpenNewCard();
    }

    const toggleOpenListMenuAndRemoveList = () => {
        props.toggleOpenListMenu();
        props.onRemoveList();
    }

    return (
        <div className="list-menu flex">
            <div className="list-menu-header flex">
                <h3 className="fs14">List Actions</h3>
            </div>
            <div className="list-menu-content flex fs14">
                <ul>
                    <li onClick={toggleOpenListMenuAndRemoveList}>Delete List</li>
                    <li onClick={toggleOpenListMenuAndNewCard}>Add Card</li>
                </ul>
            </div>
        </div >
    )
}

export default ListMenuCmp;
