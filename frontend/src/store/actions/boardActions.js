import { boardService } from '../../services/boardService';

//BOARD//
export function loadBoards() {
    return async dispatch => {
        try {
            const boards = await boardService.getBoards();
            dispatch({ type: 'SET_BOARDS', boards });
        } catch (err) {
            console.log('Cannot load boards', err);
        }
    }
}

export function loadBoardAndSetCurrBoard(boardId) {
    return async dispatch => {
        try {
            const board = await boardService.getBoardById(boardId);
            dispatch({ type: 'SET_CURR_BOARD', board });
        } catch (err) {
            console.log('Cannot load board', err);
        }
    }
}

//CARD//
export function updateCurrBoard({ board }) {
    return async dispatch => {
        try {
            dispatch({ type: "UPDATE_CURR_BOARD", board });
            await boardService.updateBoard(board);
        } catch (err) {
            console.log('ERROR!', err);
        }
    }
}
