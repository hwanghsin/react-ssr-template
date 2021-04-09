import {
    CHANGE_TYPE_NAME
} from '../constants';

export const changeTypeName = name => ({
    type: CHANGE_TYPE_NAME,
    payload: { name }
});