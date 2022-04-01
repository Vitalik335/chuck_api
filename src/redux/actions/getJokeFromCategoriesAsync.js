export function getJokeFromCategories(data) {
    return {
        type: "GET_JOKE_FROM_CATEGORIES",
        data
    }
}

export function getJokeFromCategoriesAsync(category) {
    return (dispatch) => {
        fetch(`https://api.chucknorris.io/jokes/${category === 'random' ? category : `random?category=${category}` }`)
            .then(response => {
                return response.json();
            })
            .then(res => {
                return dispatch(getJokeFromCategories(res));
            })
            .catch(error => {
                console.log('Request failed', error);
            });
    };
}
