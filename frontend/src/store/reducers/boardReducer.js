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
        case 'ADD_CARD':
            const listIdx = state.currBoard.lists.findIndex(list => list.id === action.listId);
            const cards = state.currBoard.lists[listIdx].cards;
            return {
                ...state,
                currBoard: {
                    ...state.currBoard,
                    lists: [
                        ...state.currBoard.lists.slice(0, listIdx),
                        {
                            ...state.currBoard.lists[listIdx],
                            cards: [...cards, action.card],
                        },
                        ...state.currBoard.lists.slice(listIdx + 1),
                    ],
                }
            }
        case 'UPDATE_BOARDS':
            const idx = state.boards.findIndex(currBoard => currBoard._id === action.board._id);
            state.boards.splice(idx, 1, action.board);
            return {
                ...state,
                boards: state.boards
            }
        default:
            return state;
    }
}
