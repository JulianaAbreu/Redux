
import { login } from '../actions/Login';

const initialState = {
    isAuthenticated: false,
    user: [],
    email: '',
    password: '',
    error: ''
}

export default function (state = [], action) {
    switch (action.type) {
        case LOGIN:
            return [
                action.payload.data, ...state
            ];
    }
    return state;
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTH:
            return { ...state, isAuthenticated: true, email: action.payload.email, password: action.payload.password }
        case ADD_ERROR:
            return { ...state, error: action.payload }
        default:
            return state

    }
}