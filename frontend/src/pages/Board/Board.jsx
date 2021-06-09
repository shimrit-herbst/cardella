import { Component } from 'react';
import { connect } from 'react-redux';
import { boardService } from '../../services/boardService';
import { utilService } from '../../services/utilService';
import { updateCurrBoard, loadBoardAndSetCurrBoard } from '../../store/actions/boardActions';
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

  getCurrBoardCopy() {
    const { currBoard } = this.props;
    const board = utilService.getCopy(currBoard);
    console.log("🚀 ~ file: Board.jsx ~ line 25 ~ _Board ~ getCurrBoardCopy ~ board", board)
    return board;
  }

  getListIdxById(listId) {
    const board = this.getCurrBoardCopy();
    const listIdx = board.lists.findIndex(list => list.id === listId);
    return listIdx;
  }

  getCardIdxById(listId, cardId) {
    const board = this.getCurrBoardCopy();
    const listIdx = this.getListIdxById(listId);
    const cardIdx = board.lists[listIdx].cards.findIndex(card => card.id === cardId);
    return cardIdx;
  }

  onAddCard = async (newCardTitle, listId) => {
    const board = this.getCurrBoardCopy();
    const listIdx = this.getListIdxById(listId);
    const cards = board.lists[listIdx].cards;
    const card = await boardService.getEmptyCard(newCardTitle);
    cards.push(card);
    this.props.updateCurrBoard({ board });
  }

  onUpdateListTitle = (listTitle, listId) => {
    const board = this.getCurrBoardCopy();
    const listIdx = this.getListIdxById(listId);
    board.lists[listIdx].title = listTitle;
    this.props.updateCurrBoard({ board });
  }

  onRemoveCard = (cardId, listId) => {
    const board = this.getCurrBoardCopy();
    const listIdx = this.getListIdxById(listId);
    const cards = board.lists[listIdx].cards;
    const cardIdx = this.getCardIdxById(listId, cardId);
    cards.splice(cardIdx, 1);
    this.props.updateCurrBoard({ board });
  }

  render() {
    const { currBoard } = this.props;
    const lists = currBoard.lists;
    const style = (currBoard && currBoard.style) ? {
      backgroundColor: currBoard.style.backgroundColor,
      backgroundImage: `url(${currBoard.style.backgroundImgUrl})`
    } : {};
    return (
      <div className="app-container flex f-col" style={style}>
        <BoardHeader board={currBoard} />
        {lists &&
          <div className="lists-container flex">
            {lists.map((list, index) =>
              <ListCmp
                onAddCard={this.onAddCard}
                onUpdateListTitle={this.onUpdateListTitle}
                onRemoveCard={this.onRemoveCard}
                board={currBoard}
                index={index}
                key={index} />)}
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
  updateCurrBoard,
}

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board);
