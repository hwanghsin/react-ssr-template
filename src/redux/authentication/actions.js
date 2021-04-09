import {
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    LOGIN,
    LOGIN_SUCCESS,
    API_FAILED,
    CLEAR_ERRORS
} from '../constants';

export const changeUsername = username => ({
    type: CHANGE_USERNAME,
    payload: { username }
});
export const changePassword = password => ({
    type: CHANGE_PASSWORD,
    payload: { password }
});
export const login = ({username, password}) => async (dispatch, getState, api) => {
    dispatch({ type: LOGIN });
    try {
        const res = await api.auth().signInWithEmailAndPassword(username, password);
        dispatch({ type: LOGIN_SUCCESS });
        window.location.replace('/');
    } catch(error) {
        let message_zh = '';
        switch (error.code) {
            case 'auth/invalid-email':
            case 'auth/user-not-found':
                message_zh = '帳號錯誤';
                break;
            case 'auth/user-disabled':
                message_zh = '使用者無法登入，請洽相關人員';
                break;
            case 'auth/wrong-password':
                message_zh = '密碼錯誤';
                break;
            default:
                message_zh = '未定義問題';
        }
        dispatch({
            type: API_FAILED,
            payload: { message_zh }
        });
        setTimeout(() => {
            dispatch({ type: CLEAR_ERRORS })
        }, 4000);
    }
}
export const logout = () => async (dispatch, getState, api) => {
    await api.auth().signOut();
    window.location = '/login';
}