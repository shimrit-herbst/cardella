import { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { boardService } from '../../services/boardService';
import { utilService } from '../../services/utilService';
import { updateCurrBoard, loadBoardAndSetCurrBoard, removeBoard } from '../../store/actions/boardActions';
import BoardHeader from '../../cmps/Board/BoardHeader';
import ListCmp from '../../cmps/List/ListCmp/ListCmp';
import CardDetails from '../../pages/CardDetails/CardDetails';
import './Board.scss';
class _Board extends Component {
  state = {
    showCardModal: false,
  }

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
    return board;
  }

  getListIdxById(listId) {
    const { currBoard } = this.props;
    const listIdx = currBoard.lists.findIndex(list => list.id === listId);
    return listIdx;
  }

  getCardIdxById(listId, cardId) {
    const { currBoard } = this.props;
    const listIdx = this.getListIdxById(listId);
    const cardIdx = currBoard.lists[listIdx].cards.findIndex(card => card.id === cardId);
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

  onRemoveList = (listId) => {
    const board = this.getCurrBoardCopy();
    const listIdx = this.getListIdxById(listId);
    board.lists.splice(listIdx, 1)
    this.props.updateCurrBoard({ board });
  }

  onUpdateBoardTitle = (boardTitle) => {
    const board = this.getCurrBoardCopy();
    board.title = boardTitle;
    this.props.updateCurrBoard({ board });
  }

  onRemoveBoard = () => {
    const { currBoard } = this.props;
    // TODO - Issue #20
    if (currBoard._id === '5fca2d38e4167fe6dfcfbec5') return console.log('Public board cannot be removed!');
    else {
      this.props.removeBoard(currBoard._id);
      this.props.history.push('/');
    }
  }

  onSetBackgroundImg = (imgUrl) => {
    const board = this.getCurrBoardCopy();
    board.style.backgroundImgUrl = imgUrl;
    board.style.backgroundColor = "";
    this.props.updateCurrBoard({ board });
  }

  onSetBgc = (color) => {
    const board = this.getCurrBoardCopy();
    board.style.backgroundColor = color;
    board.style.backgroundImgUrl = "";
    this.props.updateCurrBoard({ board });
  }

  toggleShowCardModal = () => {
    this.setState(prevState =>
      ({ ...prevState, showCardModal: !prevState.showCardModal }));
  }

  getListTitleByListId = (listId) => {
    const { currBoard } = this.props;
    const listIdx = this.getListIdxById(listId);
    const list = currBoard.lists[listIdx];
    return list.title;
  }

  getCardByCardId = (listId, cardId) => {
    const { currBoard } = this.props;
    const listIdx = this.getListIdxById(listId);
    const cardIdx = this.getCardIdxById(listId, cardId);
    const card = currBoard.lists[listIdx].cards[cardIdx];
    return card;
  }

  render() {
    const { currBoard } = this.props;
    if (!currBoard) return <></>;
    const lists = currBoard.lists;
    const style = (currBoard && currBoard.style) ? {
      backgroundColor: currBoard.style.backgroundColor,
      backgroundImage: `url(${currBoard.style.backgroundImgUrl})`
    } : {};

    return (
      <div className="app-container flex f-col" style={style}>
        <BoardHeader
          board={currBoard}
          onUpdateBoardTitle={this.onUpdateBoardTitle}
          onRemoveBoard={this.onRemoveBoard}
          onSetBackgroundImg={this.onSetBackgroundImg}
          onSetBgc={this.onSetBgc}
        />
        <div className="lists-container flex">
          {lists.map((list, index) =>
            <ListCmp
              board={currBoard}
              index={index}
              key={list.id}
              onAddCard={this.onAddCard}
              onUpdateListTitle={this.onUpdateListTitle}
              onRemoveCard={this.onRemoveCard}
              onRemoveList={this.onRemoveList}
              toggleShowCardModal={this.toggleShowCardModal}
            />)}
        </div>
        {this.state.showCardModal &&
          <div className="modal-route">
            <div className="modal-content flex f-center">
              <Route
                path="/boards/:boardId/list/:listId/card/:cardId"
                render={props => <CardDetails
                  {...props}
                  boardId={currBoard._id}
                  getListTitleByListId={this.getListTitleByListId}
                  getCardByCardId={this.getCardByCardId}
                  toggleShowCardModal={this.toggleShowCardModal}
                />}
              />
            </div>
          </div>
        }
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
  removeBoard,
}

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board);
