const initialState = {
    jokeFromCategories: []
};

const getJokeFromCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_JOKE_FROM_CATEGORIES':
            return {
                ...state,
                [action.data.categories.length ? action.data.categories[0] : `random`]: action.data
            };
        default:
            return state;
    }
};

export default getJokeFromCategoriesReducer;