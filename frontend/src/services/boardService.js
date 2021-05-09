import HttpService from './httpService.js'
// import { utilService } from './util-service.js';

const PATH_PREFIX = 'boards';

export const boardService = {
    getBoards,
    getBoardById,
    // addBoard,
    // removeBoard,
    // updateBoard,
    // getEmptyCard,
    // getEmptyList,
    // getActivity

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

// function addBoard() {
//     const board = {
//         title: "New board",
//         style: {
//             "backgroundColor": "white",
//             "backgroundImgUrl": "https://res.cloudinary.com/morshva/image/upload/v1606573383/5_mavwxz.jpg"
//         },
//         createdBy: _getCreatedBy(),
//         members: [_getCreatedBy()],
//         createdAt: Date.now(),
//         lists: [
//             {
//                 id: utilService.makeId(),
//                 title: "New list",
//                 cards: [{
//                     id: utilService.makeId(),
//                     title: "New card",
//                     description: "",
//                     createdAt: Date.now(),
//                     style: { "bgColor": "#E0DFDF" },
//                     createdBy: _getCreatedBy(),
//                     members: [],
//                     labels: [],
//                     comments: [],
//                     checklists: []
//                 }],
//                 // push the member
//             }],
//         boardActivities: [],
//     }
//     console.log(board);
//     return HttpService.post('board', board)
// }

// function removeBoard(boardId) {
//     console.log('here-removeBoard boardService')
//     return HttpService.delete(`${PATH_PREFIX}/${boardId}`)
// }

// function updateBoard(board) {
//     return HttpService.put(`${PATH_PREFIX}/${board._id}`, board)
// }

// function getEmptyCard(title = '') {
//     const card = {
//         id: utilService.makeId(),
//         title,
//         createdAt: Date.now(),
//         dueDate: null,
//         description: '',
//         uploadImgUrl: '',
//         style: {
//             bgColor: '#FFFFFF'
//         },
//         createdBy: _getCreatedBy(),
//         members: [],
//         labels: [],
//         checklists: []
//     }
//     return card;
// }

// function getEmptyList(title = '') {
//     const list = {
//         id: utilService.makeId(),
//         title,
//         cards: []
//     }
//     return list;
// }

// function getActivity(logEntry) {
//     let newActivity = {
//         id: utilService.makeId(),
//         txt: ' ' + logEntry.action + ': ',
//         createdAt: Date.now(),
//         createdBy: {
//             _id: "5fc4baf914c9a871c81fe2be",
//             fullname: "Shimrit Herbst",
//             imgUrl: "https://res.cloudinary.com/shimrit/image/upload/v1606511397/cardella/shimrit_idcy9l.jpg"
//         },
//         inCard: {
//             id: logEntry.cardId,
//             title: logEntry.cardTitle
//         },
//         inList: {
//             id: logEntry.listId,
//             title: logEntry.listTitle
//         }
//     }
//     return newActivity;
// }

// // function getEmptyActvitiy() {
// //     const activity = {

// //         id: utilService.makeId(),
// //         txt: "set card comment to a comment",
// //         createdAt: 1606648895614,
// //         createdBy: {
// //             _id: "u101",
// //             fullname: "Shimrit Herbst",
// //             imgUrl: "https://res.cloudinary.com/shimrit/image/upload/v1606511393/cardella/mor_ojbfto.jpg"
// //         },
// //         inCard: {
// //             id: "c101",
// //             title: "Replace Logo"
// //         },
// //         inList: {
// //             id: "l101",
// //             title: "List 1"
// //         }
// //     },
// // }


// // TODO implement when login is ready
// function _getCreatedBy() {
//     return {
//         id: 'u103',
//         fullname: 'Shimrit Herbst',
//         imgUrl: 'https://res.cloudinary.com/shimrit/image/upload/v1606511397/cardella/shimrit_idcy9l.jpg',
//     };
// }
