import { combineReducers } from 'redux';

import userReducer from './user';
import booksReducer from './Books'

const rootReducer = combineReducers({
    user: userReducer,
    books: booksReducer,
});

export default rootReducer;