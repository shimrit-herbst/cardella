import { Component } from 'react';
import { connect } from 'react-redux';
import { loadBoard } from '../../store/actions/boardActions';

class _Board extends Component {
  componentDidMount() {
    const boardId = this.props.match.params.boardId;
    this.props.loadBoard(boardId);
    console.log(this.props);
  }

  render() {
    const { currBoard } = this.props;
    return (
      <div className="board">
        <h1>Board Name: {currBoard.title}!</h1>
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
  loadBoard,
}
export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board);
