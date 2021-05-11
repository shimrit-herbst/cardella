import HttpService from './httpService.js'

const PATH_PREFIX = 'boards';

export const boardService = {
    getBoards,
    getBoardById,
}

function getBoards(filterBy = {}) {
    let qs = '';
    let keys = Object.keys(filterBy);
    if (keys.length > 0) {
        qs = '?' + keys
            .map(key => `${key}=${filterBy[key]}`)
            .join('&');
    }
    return HttpService.get(`${PATH_PREFIX}/${qs}`)
}

function getBoardById(boardId) {
    return HttpService.get(`${PATH_PREFIX}/${boardId}`)
}
