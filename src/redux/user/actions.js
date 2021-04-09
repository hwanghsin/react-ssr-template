import { FETCH_MY_INFO } from '../constants';

export const fetchMyInfo = user => ({
    type: FETCH_MY_INFO,
    payload: { user }
});