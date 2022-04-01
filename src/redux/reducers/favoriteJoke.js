import _ from 'lodash';

const initialState = {
    favoriteJoke: []
};

const favoriteJokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_JOKE':
            let uniqAddJoke = _.uniq( [
                ...state.favoriteJoke,
                action.data
            ], 'id');
            return {
                ...state,
                favoriteJoke: uniqAddJoke
            };
        case 'DELETE_JOKE':
            return {
                ...state,
                favoriteJoke: _.reject(state.favoriteJoke, action.data)
            };
        case 'EDIT_JOKE':
            let uniqJoke = _.uniq([
                ...state.favoriteJoke,
                action.data
            ], 'id');
            return {
                ...state,
                favoriteJoke: uniqJoke
            };
        default:
            return state;
    }
};

export default favoriteJokeReducer;