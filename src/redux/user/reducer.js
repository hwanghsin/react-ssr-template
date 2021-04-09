import { FETCH_MY_INFO } from '../constants';

const INITIAL_STATE = {
    myInfo: null
}

const User = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MY_INFO:
            return {
                ...state,
                myInfo: action.payload.user
            }
        default: return state;
    }
}

export default User;