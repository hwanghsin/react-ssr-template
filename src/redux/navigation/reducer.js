import {
    TOGGLE_SIDE_MENU,
    TOGGLE_HEADER_SETTING,
    CHANGE_HEADER_USERNAME
} from '../constants';

const INITIAL_STATE = {
    sides: [
        { name: '首頁', path: '/', icon: 'fa-home' },
        { name: '部落格', path: '/blog', icon: 'fa-blog' },
        { name: '單字庫', path: '/vocab', icon: 'fa-file-word' },
        { name: '進階設定', path: '/setting', icon: 'fa-cog' }
    ],
    isShrink: false,
    isCollapse: false,
    headerName: ''
}

const Navigation = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_HEADER_USERNAME:
            return {
                ...state,
                headerName: action.payload.name
            }
        case TOGGLE_HEADER_SETTING:
            return {
                ...state,
                isCollapse: !(state.isCollapse)
            }
        case TOGGLE_SIDE_MENU:
            return {
                ...state,
                isShrink: !(state.isShrink)
            }
        default: return state;
    }
}

export default Navigation;