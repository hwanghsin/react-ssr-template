import {
    CREATE_TYPE,
    FETCH_TYPES,
    DELETE_TYPE
} from '../constants';

const Type = (state = null, action) => {
    let types = state;
    switch (action.type) {
        case FETCH_TYPES:
            return action.payload.types;
        case CREATE_TYPE:
            if (!types) {
                types = {
                    [action.payload.key]: action.payload.content
                }
            } else {
                types[action.payload.key] = action.payload.content;
            }
            return types;
        case DELETE_TYPE:
            delete types[action.payload.key];
            return types;
        default: return state;
    }
}

export default Type;