import HttpService from './httpService.js';
import { utilService } from './utilService.js';

const PATH_PREFIX = 'boards';

export const boardService = {
    getBoards,
    getBoardById,
    updateBoard,
    getEmptyCard,
    removeBoard,
}

function getBoards(filterBy = {}) {
    let qs = '';
    let keys = Object.keys(filterBy);
    if (keys.length > 0) {
        qs = '?' + keys
            .map(key => `${key}=${filterBy[key]}`)
            .join('&');
    }
    return HttpService.get(`${PATH_PREFIX}/${qs}`);
}

function getBoardById(boardId) {
    return HttpService.get(`${PATH_PREFIX}/${boardId}`);
}

function updateBoard(board) {
    return HttpService.put(`${PATH_PREFIX}/${board._id}`, board);
}

function removeBoard(boardId) {
    return HttpService.delete(`${PATH_PREFIX}/${boardId}`);
}

function getEmptyCard(title = '') {
    const card = {
        id: utilService.makeId(),
        title,
        createdAt: Date.now(),
        dueDate: null,
        description: '',
        uploadImgUrl: '',
        style: {
            bgColor: '#FFFFFF'
        },
        createdBy: _getCreatedBy(),
        members: [],
        labels: [],
        checklists: []
    }
    return card;
}

function _getCreatedBy() {
    return {
        id: 'u103',
        fullname: 'Shimrit Herbst',
        imgUrl: 'https://res.cloudinary.com/shimrit/image/upload/v1606511397/cardella/shimrit_idcy9l.jpg',
    };
}
