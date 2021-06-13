const INITIAL_STATE = {
    boards: [],
    currBoard: null,
}

export function boardReducer(state = INITIAL_STATE, action) {
    const idx = state.boards.findIndex(currBoard => currBoard._id === action.boardId);
    switch (action.type) {
        case 'SET_BOARDS':
            return {
                ...state,
                boards: action.boards
            }
        case 'SET_CURR_BOARD':
            return {
                ...state,
                currBoard: action.board
            }
        case 'UPDATE_CURR_BOARD':
            state.boards.splice(idx, 1, action.board);
            return {
                ...state,
                boards: state.boards,
                currBoard: action.board,
            }
        case 'REMOVE_BOARD':
            state.boards.splice(idx, 1);
            return {
                ...state,
                boards: state.boards,
            }
        default:
            return state;
    }
}
