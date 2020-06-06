const globalState = {
  data: {},
  todos: []
}

const rootReducer = (state = globalState, action) => {
  switch(action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        data: action.input
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.input]
      }
    default:
      return state  
  }
}

export default rootReducer;