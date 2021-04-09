import {
    SELECT_PARENT_CATEGORY,
    CHANGE_CATEGORY_NAME,
    CHANGE_VOCAB_WORD,
    CHANGE_VOCAB_DESC,
    TOGGLE_READY,
    TOGGLE_SHOW_MODAL,
    CREATE_TYPE,
    CREATE_VOCAB,
    FETCH_VOCAB
} from '../constants';

const INITIAL_STATE = {
    form: {
        word: '',
        desc: ''
    },
    category: null,
    childList: [],
    vocabList: [],
    isReady: false,
    isModalOn: false,
    categoryName: ''
}

const Vocab = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_TYPE:
            return {
                ...state,
                childList: [...state.childList, action.payload.content]
            }
        case TOGGLE_READY:
            return {
                ...state,
                isReady: !(state.isReady)
            }
        case TOGGLE_SHOW_MODAL:
            return {
                ...state,
                isModalOn: action.payload.isModalOn
            }
        case CHANGE_CATEGORY_NAME:
            return {
                ...state,
                categoryName: action.payload.categoryName
            }
        case CHANGE_VOCAB_WORD:
            return {
                ...state,
                form: {
                    ...state.form,
                    word: action.payload.word
                }
            }
        case CHANGE_VOCAB_DESC:
            return {
                ...state,
                form: {
                    ...state.form,
                    desc: action.payload.desc
                }
            }
        case SELECT_PARENT_CATEGORY:
            return {
                ...state,
                category: action.payload.category,
                childList: action.payload.childList
            }
        case FETCH_VOCAB:
            return {
                ...state,
                vocabList: action.payload.vocabList
            }
        case CREATE_VOCAB:
            state.vocabList.push({
                ...action.payload.content,
                id: action.payload.key
            });
            return {
                ...state,
                form: {
                    word: '',
                    desc: ''
                },
                vocabList: state.vocabList
            }
        default: return state;
    }
}

export default Vocab;