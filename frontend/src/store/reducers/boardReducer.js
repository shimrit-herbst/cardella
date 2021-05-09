
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
        case 'SET_BOARD':
            return {
                ...state,
                currBoard: action.board
            }
        default:
            return state;
    }
}
