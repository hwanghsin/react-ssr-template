import {
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    LOGIN,
    LOGIN_SUCCESS,
    API_FAILED
} from '../constants';

const INIT_STATE = {
    form: {
        username: '',
        password: ''
    },
    isLoading: false
}

const Authentication = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHANGE_USERNAME:
            return {
                ...state,
                form: {
                    ...state.form,
                    username: action.payload.username
                }
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                form: {
                    ...state.form,
                    password: action.payload.password
                }
            }
        case LOGIN:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
        case API_FAILED:
            return {
                ...state,
                isLoading: false
            }
        default: return state;
    }
}

export default Authentication;