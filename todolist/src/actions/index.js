let nextTodoId = 0
let nextSubTodoId = 0

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        payload: text, 
        subTodos: []
    }
}
export const addSubTodo = (description, index) => {
    return {
        type: 'ADD_SUB_TODO',
        id: nextSubTodoId++,
        completed:false,
        index,
        description
        
    }
}
export const editSubTodo = (id, description) => {
    return {
        type: 'EDIT_SUB_TODO',
        description,
        id
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
        type: 'EDIT_TODO',
        text,
        id
    }
}

export const searchTodo = (searchText) => {
    return {
        type: 'SEARCH_TODO',
        searchText: ''
    }
}
export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}