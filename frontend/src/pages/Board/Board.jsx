import { Component } from 'react';
import { connect } from 'react-redux';
import { loadBoardAndSetCurrBoard } from '../../store/actions/boardActions';
import BoardHeader from '../../cmps/Board/BoardHeader';
import ListCmp from '../../cmps/List/ListCmp/ListCmp';
import './Board.scss';

class _Board extends Component {
  componentDidMount() {
    const boardId = this.props.match.params.boardId;
    this.props.loadBoardAndSetCurrBoard(boardId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.boardId !== this.props.match.params.boardId) {
      this.props.loadBoardAndSetCurrBoard(this.props.match.params.boardId)
    }
  }


  render() {
    const { currBoard } = this.props;
    const lists = currBoard.lists;
    const style = (currBoard && currBoard.style) ? {
      backgroundColor: currBoard.style.backgroundColor,
      backgroundImage: `url(${currBoard.style.backgroundImgUrl})`
    } : {};
    return (
      <div className="app-container" style={style}>
        <BoardHeader board={currBoard} />
        {lists &&
          <div className="lists-container">
            {lists.map((list, index) => <ListCmp board={currBoard} index={index} key={index} />)}
          </div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currBoard: state.boardReducer.currBoard
  }
}
const mapDispatchToProps = {
  loadBoardAndSetCurrBoard,
}
export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board);
