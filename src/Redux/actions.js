import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "./actionTypes";
import axios from "axios";

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

// export const loginUser = payload => {
//     const { email, password } = payload
//     return dispatch => {
//         dispatch(loginUserRequest());
//         return axios
//             .post("https://api-stage.kyte.app/network-app/oauth/token", {
//                 auth: {
//                     username: email,
//                     password: password,
//                 },
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                     "grant_type": "password"
//                 }
//             })
//             .then(res => {
//                 dispatch(loginUserSuccess());
//             })
//             .catch(() => dispatch(loginUserFailure()));
//     };
// }
