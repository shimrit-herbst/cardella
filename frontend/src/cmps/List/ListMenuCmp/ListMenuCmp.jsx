import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import './ListMenuCmp.scss';

class ListMenuCmp extends Component {
    render() {
        const { toggleOpenListMenu, list } = this.props;
        return (
            <div className="list-menu flex">
                <div className="list-menu-header flex">
                    <h3 className="fs14">List Actions</h3>
                    <div className="list-menu-close-btn" onClick={() => toggleOpenListMenu()}>
                        <FontAwesomeIcon className="icon fs13" icon={faTimes} />
                    </div>
                </div>
                <div className="list-menu-content flex fs14">
                    <ul>
                        <li>Delete List</li>
                        <li>Add Card</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default ListMenuCmp;
