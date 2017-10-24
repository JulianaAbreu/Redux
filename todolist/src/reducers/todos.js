const todos = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return state.concat(
                {
                    id: action.id,
                    text: action.payload,
                    completed: false,
                    subTodos: []
                }
            )

        case 'ADD_SUB_TODO':
            console.log(action)

            let newTodo = state[action.index].subTodos.concat(
                {
                    id: action.id,
                    description: action.description,
                    completed: false,
                }
            )

            return state.map((todo, index) => {
                if (index === action.index) {
                    todo.subTodos = newTodo;
                }
                return todo;
            })

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

        case 'EDIT_SUB_TODO':
            
                
            
            

        case 'SEARCH_TODO':
            /*  const { value } = action;
             const todo = state.todos.filter((val) => val.includes(value));
             return { ...state, value, todo };  */

            return Object.assign({}, state, { text: action.searchText });


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