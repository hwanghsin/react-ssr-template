import {
    CLEAR_ERRORS,
    API_FAILED
} from '../constants';

const Error = (state = [], action) => {
    switch (action.type) {
        case API_FAILED:
            state.push(action.payload);
            return [...state];
        case CLEAR_ERRORS:
            return [];
        default: return state;
    }
}

export default Error;