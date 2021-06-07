import { Component } from 'react';
import { connect } from 'react-redux';
import { boardService } from '../../services/boardService';
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

  onAddCard = async (newCardTitle, listId) => {
    const { currBoard } = this.props;
    const board = JSON.parse(JSON.stringify(currBoard));
    const listIdx = board.lists.findIndex(list => list.id === listId);
    const cards = board.lists[listIdx].cards;
    const card = await boardService.getEmptyCard(newCardTitle);
    cards.push(card);
    this.props.updateCurrBoard({ board });
  }

  onUpdateListTitle = (listTitle, listId) => {
    const { currBoard } = this.props;
    const board = JSON.parse(JSON.stringify(currBoard));
    const listIdx = board.lists.findIndex(list => list.id === listId);
    const lists = board.lists;
    lists[listIdx].title = listTitle;
    this.props.updateCurrBoard({ board });
  }

  onRemoveCard = (cardId, listId) => {
    const { currBoard } = this.props;
    const board = JSON.parse(JSON.stringify(currBoard));
    const listIdx = board.lists.findIndex(list => list.id === listId);
    const cards = board.lists[listIdx].cards;
    const cardIdx = cards.findIndex(card => card.id === cardId);
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
