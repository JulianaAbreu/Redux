const todos = (
    state = [], action) => {

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
                    todo.text = todo.text
                }
                return todo;
            })

        case 'EDIT_SUB_TODO':
            return state.map((todo) => {
                if (todo.id !== action.todoIndex) return todo;
                todo.subTodos = todo.subTodos.map(subtodo => {
                    if (subtodo.id == action.subtodoIndex) {
                        subtodo.description = action.text
                    }

                    return subtodo;
                });

                return todo;
            });

        case 'REMOVE_SUB_TODO':
            return state.map((todo) => {
                if (todo.id !== action.todoIndex) {
                    return todo
                } else {
                    todo.subTodos = todo.subTodos.filter(subtodo => subtodo.id !== action.subtodoIndex)

                }
                console.log(todo.subTodos)
                return todo;
            });
        /* 
                    return state.map((todo) => {
                        if (todo.id !== action.todoIndex) {
                            return todo
                        } else {
                            todo.subTodos = todo.subTodos.filter(subtodo => subtodo.id !== action.subtodoIndex)
        
                        }
                        console.log(todo.subTodos)
                        return todo; */

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