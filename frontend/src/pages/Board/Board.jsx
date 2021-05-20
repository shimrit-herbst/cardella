import { Component } from 'react';
import { connect } from 'react-redux';
import { loadBoardAndSetCurrBoard } from '../../store/actions/boardActions';
import BoardHeader from '../../cmps/Board/BoardHeader';
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
    const style = (currBoard && currBoard.style) ? {
      'background-color': currBoard.style.backgroundColor,
      'background-image': `url(${currBoard.style.backgroundImgUrl})`
    } : {};
    return (
      <div className="app-container" style={style}>
        <BoardHeader board={currBoard} />
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
