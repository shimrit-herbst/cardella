import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadBoards, loadBoardAndSetCurrBoard } from '../../store/actions/boardActions';
import './BoardsMenu.scss';

class _BoardsMenu extends Component {
    componentDidMount() {
        this.props.loadBoards();
    }
    onToggleBoardsMenu = () => {
        this.props.onToggleBoardsMenu();
    }
    render() {
        const { boards } = this.props;
        return (
            <section className="boards-menu-container">
                <div className="boards-menu">
                    <ul className="boards-list">
                        {
                            boards.map(board =>
                                <li className="board-line flex" key={board._id} onClick={this.onToggleBoardsMenu}>
                                    <Link to={`/boards/${board._id}`} className="link">
                                        <h2>{board.title}</h2>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </section>
        )
    }
}


function mapStateToProps(state) {
    return {
        boards: state.boardReducer.boards,
        board: state.boardReducer.currBoard

    }
}
const mapDispatchToProps = {
    loadBoards,
    loadBoardAndSetCurrBoard,
}
export const BoardsMenu = connect(mapStateToProps, mapDispatchToProps)(_BoardsMenu);
