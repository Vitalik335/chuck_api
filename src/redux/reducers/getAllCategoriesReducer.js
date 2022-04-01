const initialState = {
    allCategories: []
};

const getAllCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORIES':
            return {
                ...state,
                allCategories: action.data
            };
        default:
            return state;
    }
};

export default getAllCategoriesReducer;