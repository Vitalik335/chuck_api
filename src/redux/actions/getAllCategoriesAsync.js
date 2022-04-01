export function getAllCategories(data) {
    return {
        type: "GET_ALL_CATEGORIES",
        data
    }
}

export function getAllCategoriesAsync() {
    return (dispatch) => {
        fetch(`https://api.chucknorris.io/jokes/categories`)
            .then(response => {
                return response.json();
            })
            .then(res => {
                return dispatch(getAllCategories(res));
            })
            .catch(error => {
                console.log('Request failed', error);
            });
    };
}
