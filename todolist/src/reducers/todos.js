const todos = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return state.concat(
                {
                    id: action.id,
                    text: action.payload,
                    completed: false
                }
            )

        case 'REMOVE_TODO':
            return [
                ...state.filter(todo => todo.id !== action.id),
            ];

        case 'EDIT_TODO':
            return state.map(todo => {
                if (todo.id == action.id) {
                    todo.text = todo.payload
                }
                return todo;
            })

        case 'SEARCH_TODO':
            const { value } = action;
            const todo = state.todos.filter((val) => val.includes(value));
            return { ...state, value, todo };
            /* return Object.assign({}, state, {searchText:action.text}) */

        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        default:
            return state
    }
}

export default todos