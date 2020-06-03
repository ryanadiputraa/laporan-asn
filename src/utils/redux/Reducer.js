import ActionType from './ActionType'

const globalState = {
  data: {},
  todos: []
}

const rootReducer = (state = globalState, action) => {
  switch(action.type) {

    case ActionType.ADD_DATA :
      return {
        ...state,
        data: action.input
      }

    case ActionType.ADD_TODOS :
      return {
        ...state,
        todos: [...state.todos, action.input]
      }
    
    default :
      return state

  }
}

export default rootReducer;