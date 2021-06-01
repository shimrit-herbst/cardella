const INITIAL_STATE = {
    boards: [],
    currBoard: {},
}

export function boardReducer(state = INITIAL_STATE, action) {
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
            const idx = state.boards.findIndex(currBoard => currBoard._id === action.board._id);
            state.boards.splice(idx, 1, action.board);
            return {
                ...state,
                bords: state.boards,
                currBoard: action.board,
            }
        default:
            return state;
    }
}
