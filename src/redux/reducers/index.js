import {combineReducers} from 'redux';
import getJokeFromCategoriesReducer from "./getJokeFromCategoriesReducer";
import getAllCategoriesReducer from "./getAllCategoriesReducer";
import addJokeStoreReducer from "./favoriteJoke";

const rootReducer = combineReducers({
    getJokeFromCategoriesReducer,
    getAllCategoriesReducer,
    addJokeStoreReducer
});

export default rootReducer;