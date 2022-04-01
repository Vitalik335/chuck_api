export function addJokeStore(data) {
    return {
        type: "ADD_JOKE",
        data
    }
}

export function deleteJokeStore(data) {
    return {
        type: "DELETE_JOKE",
        data
    }
}

export function editJokeStore(data) {
    return {
        type: "EDIT_JOKE",
        data
    }
}