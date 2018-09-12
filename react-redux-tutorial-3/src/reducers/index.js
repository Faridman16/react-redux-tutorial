import {combineReducers} from 'redux';
import toDoReducer from './todoReducer';

export default combineReducers({
    toDo:toDoReducer,
})