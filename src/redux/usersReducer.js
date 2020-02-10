const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unFollowActionCreator = (userId) => ({type: UN_FOLLOW, userId});
export const newUsersActionCreator = (newUsers) => ({type:SET_USERS, newUsers});
export const setTotalUsersCountActionCreator = (totalCount) => ({type:SET_TOTAL_COUNT, totalCount});
export const changePageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

let initialState = {
    users: [
        {id:1, name: 'Marta', status: 10, followed: true, photos: {small: null, large: null}},
        {id:2, name: 'Marta', status: 10, followed: false, photos: {small: null, large: null}},
        {id:3, name: 'Marta', status: 10, followed: true, photos: {small: null, large: null}},
        {id:4, name: 'Marta', status: 10, followed: true, photos: {small: null, large: null}},
        {id:5, name: 'Marta', status: 10, followed: true, photos: {small: null, large: null}},
        {id:6, name: 'Marta', status: 10, followed: true, photos: {small: null, large: null}},
        {id:7, name: 'Marta', status: 10, followed: true, photos: {small: null, large: null}},
        {id:8, name: 'Marta', status: 10, followed: true, photos: {small: null, large: null}}
    ],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, action.users]
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export default usersReducer;