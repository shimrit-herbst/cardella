import { boardService } from "../../services/boardService"

//BOARD//
export function loadBoards() {
    return async dispatch => {
        try {
            const boards = await boardService.getBoards();
            dispatch({ type: 'SET_BOARDS', boards });
        } catch (err) {
            console.log('ERROR!', err);
        }
    }
}

export function loadBoardAndSetCurrBoard(boardId) {
    return async dispatch => {
        try {
            const board = await boardService.getBoardById(boardId);
            dispatch({ type: 'SET_CURR_BOARD', board });
        } catch (err) {
            console.log('ERROR!', err);
        }
    }
}

// export function updateBoards({ board }) {
//     return async dispatch => {
//         try {
//             dispatch({ type: 'UPDATE_BOARDS', board });
//         } catch (err) {
//             console.log('ERROR!', err);
//         }
//     }
// }

//CARD//
export function addCard({ cardTitle, listId, board }) {
    return async dispatch => {
        try {
            const card = boardService.getEmptyCard(cardTitle);
            dispatch({ type: "ADD_CARD", listId, card });
            console.log(await boardService.updateBoard(board));
            dispatch({ type: 'UPDATE_BOARDS', board });
            // updateBoards(board);
        } catch (err) {
            console.log('ERROR!', err);
        }
    }
}
