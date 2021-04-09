import { combineReducers } from 'redux';
import Authentication from './authentication/reducer';
import Navigation from './navigation/reducer';
import Type from './type/reducer';
import User from './user/reducer';
import Blog from './blog/reducer';
import Vocab from './vocab/reducer';
import Error from './error/reducer';

export default combineReducers({
    Authentication,
    Navigation,
    Type,
    User,
    Blog,
    Vocab,
    Error
});