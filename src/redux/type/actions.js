import {
    SELECT_PARENT_CATEGORY,
    CREATE_TYPE,
    FETCH_TYPES,
    DELETE_TYPE,
    API_FAILED
} from '../constants';

export const createType = ({ name, updatedBy, category, parent = '' }) => async (dispatch, getState, api) => {
    try {
        const key = await api.database().ref('categories').push().key;
        const content = {
            category,
            fullKeyRoute: parent ? `${parent}.${key}` : key,
            updatedTime: Date.now(),
            updatedBy,
            name
        }
        await api.database().ref(`categories/${key}`).set(content)
        dispatch({
            type: CREATE_TYPE,
            payload: { key, content }
        });
    } catch (e) {
        dispatch({
            type: API_FAILED,
            payload: { ...e, message_zh: '新增分類失敗' }
        });
    }
}

export const fetchTypes = () => async (dispatch, getState, api) => {
    try {
        const res = await api.database().ref('categories').once('value');
        const categories = res.val();
        const childList = [];
        categories && Object.values(categories).forEach(type => {
            if (type.category === 'VOCAB' && type.fullKeyRoute && type.fullKeyRoute.indexOf('.') === -1) {
                childList.push(type);
            }
        });
        await Promise.all([
            dispatch({
                type: FETCH_TYPES,
                payload: { types: categories }
            }),
            dispatch({
                type: SELECT_PARENT_CATEGORY,
                payload: { category: null, childList }
            })
        ])
    } catch (e) {
        dispatch({
            type: API_FAILED,
            payload: { ...e, message_zh: '取得分類列表失敗' }
        });
    }
}

export const deleteType = key => async (dispatch, getState, api) => {
    try {
        await api.database().ref(`categories/${key}`).remove();
        dispatch({
            type: DELETE_TYPE,
            payload: { key }
        });
    } catch (e) {
        dispatch({
            type: API_FAILED,
            payload: { ...e, message_zh: '刪除分類失敗' }
        });
    }
}