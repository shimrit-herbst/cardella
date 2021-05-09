import { boardService } from "../../services/boardService"

export function loadBoards() {
    return async dispatch => {
        const boards = await boardService.getBoards();
        dispatch({ type: 'SET_BOARDS', boards });
    }
}

export function loadBoard(boardId) {
    return async dispatch => {
        const board = await boardService.getBoardById(boardId);
        dispatch({ type: 'SET_BOARD', board });
    }
}
