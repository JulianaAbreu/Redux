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
            return {
                ...state,
                todos: [
                    ...state.todos.filter(todo => (
                        todo.id !== action.id
                    )),
                ],

            };

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