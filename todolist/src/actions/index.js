let nextTodoId = 0
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        payload: text
    }
}
export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}
export const removeTodo = id => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}

export const editTodo = (id, text) => {
    return {
        type:'EDIT_TODO',
        text,
        id
    }
}
export const searchTodo = (searchText) => {
    return {
        type:'SEARCH_TODO',
        searchText:''
    }
}
export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}