import { Component } from 'react';
import { connect } from 'react-redux';
import { loadBoardAndSetCurrBoard } from '../../store/actions/boardActions';

class _Board extends Component {
  componentDidMount() {
    const boardId = this.props.match.params.boardId;
    this.props.loadBoardAndSetCurrBoard(boardId);
  }

  render() {
    const { currBoard } = this.props;
    return (
      <div className="board">
        <h1>{currBoard.title}!</h1>
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
