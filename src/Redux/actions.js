import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "./actionTypes";

export const loginUserRequest = () => ({
    type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = payload => ({
    type: LOGIN_USER_SUCCESS,
    payload
});

export const loginUserFailure = () => ({
    type: LOGIN_USER_FAILURE
});

export const loginUser = payload => {
    return dispatch => {
        dispatch(loginUserRequest());
        return axios
            .post()
            .then(res => {
                dispatch(loginUserSuccess(res));
            })
            .catch(() => dispatch(loginUserFailure()));
    };
}
