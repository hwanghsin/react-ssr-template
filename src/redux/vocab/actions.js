import {
    SELECT_PARENT_CATEGORY,
    CHANGE_CATEGORY_NAME,
    CHANGE_VOCAB_WORD,
    CHANGE_VOCAB_DESC,
    TOGGLE_READY,
    TOGGLE_SHOW_MODAL,
    CREATE_VOCAB,
    FETCH_VOCAB,
    API_FAILED
} from '../constants';

export const selectParentCategory = (category, childList) => ({
    type: SELECT_PARENT_CATEGORY,
    payload: { category, childList }
});
export const changeCategoryName = categoryName => ({
    type: CHANGE_CATEGORY_NAME,
    payload: { categoryName }
});
export const changeVocabWord = word => ({
    type: CHANGE_VOCAB_WORD,
    payload: { word }
});
export const changeVocabDesc = desc => ({
    type: CHANGE_VOCAB_DESC,
    payload: { desc }
});
export const toggleReady = () => ({ type: TOGGLE_READY });
export const toggleShowModal = isModalOn => ({
    type: TOGGLE_SHOW_MODAL,
    payload: { isModalOn }
});
export const fetchVocabs = () => async (dispatch, getState, api) => {
    try {
        const res = await api.database().ref(`vocabularies`).once('value');
        const vocabs = res.val();
        const vocabList = vocabs ? Object.keys(vocabs).map(key => {
            return {
                ...vocabs[key],
                id: key
            }
        }) : [];
        dispatch({
            type: FETCH_VOCAB,
            payload: { vocabList }
        });
    } catch (e) {
        dispatch({
            type: API_FAILED,
            payload: { ...e, message_zh: '取得單字列表失敗' }
        });
    }
}
export const createVocab = ({ word, desc, updatedBy, category }) => async (dispatch, getState, api) => {
    try {
        const key = await api.database().ref('vocabularies').push().key;
        const content = {
            category,
            updatedTime: Date.now(),
            updatedBy,
            word,
            desc
        }
        await api.database().ref(`vocabularies/${key}`).set(content)
        dispatch({
            type: CREATE_VOCAB,
            payload: { key, content }
        });
    } catch (e) {
        dispatch({
            type: API_FAILED,
            payload: { ...e, message_zh: '新增單字失敗' }
        });
    }
}