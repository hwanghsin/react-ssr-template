import {
    CHANGE_TYPE_NAME,
    CREATE_TYPE,
    DELETE_TYPE
} from '../constants';

const INITIAL_STATE = {
    list: null, 
    form: {
        title: '',
        type: '',
        ops: [],
        isPrivate: false
    },
    typeForm: {
        name: ''
    }
}

const Blog = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_TYPE:
        case DELETE_TYPE:
            return {
                ...state,
                typeForm: {
                    name: ''
                }
            }
        case CHANGE_TYPE_NAME:
            return {
                ...state,
                typeForm: {
                    name: action.payload.name
                }
            }
        default: return state;
    }
}

export default Blog;