import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "./actionTypes";


const initState = {
    isAuth: false
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_USER_REQUEST:
            return { ...state, isAuth: !state.isAuth }

        case LOGIN_USER_SUCCESS:
            return { ...state, isAuth: !state.isAuth }

        case LOGIN_USER_FAILURE:
            return { ...state, isAuth: !state.isAuth }

        default:
            return state
    }
}

export default reducer;