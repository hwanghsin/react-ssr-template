import {
    TOGGLE_SIDE_MENU,
    TOGGLE_HEADER_SETTING,
    CHANGE_HEADER_USERNAME
} from '../constants';

export const toggleSideMenu = () => ({ type: TOGGLE_SIDE_MENU });
export const toggleHeaderSetting = () => ({ type: TOGGLE_HEADER_SETTING });
export const changeHeaderUsername = name => ({
    type: CHANGE_HEADER_USERNAME,
    payload: { name }
});