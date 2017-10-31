let nextTodoId = 0
let nextSubTodoId = 0


export const loginRequest = (email, password) => {
    const user = { email: email, password: password };
    return { user, type: 'LOGIN_ATTEMPT' };
}

export const loginSuccess = (response) => {
    return {
        type:'LOGIN_SUCCESS',
        response
    }
}
export const loginFailed = (error) => {
    type:'LOGIN_ERROR',
    error
}

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
        completed: false,
        index,
        description

    }
}
export const editSubTodo = (todoIndex, text, subtodoIndex) => {
    return {
        type: 'EDIT_SUB_TODO',
        text,
        todoIndex,
        subtodoIndex
    }
}
export const login = (email, password) => {
    return {
        type: 'LOGIN',
        email,
        password
    }
}
export const removeSubTodo = (todoIndex, subtodoIndex) => {
    return {
        type: 'REMOVE_SUB_TODO',
        subtodoIndex,
        todoIndex
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const setSearch = searchText => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText,
    };
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
        searchText
    }
}
export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}