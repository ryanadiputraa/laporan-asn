import jsPDF from 'jspdf';
import 'jspdf-autotable';

const globalState = {
  date: '',
  data: {},
  todos: []
}

const rootReducer = (state = globalState, action) => {
  switch(action.type) {
    
    case 'SET_DATE':
    return {
      ...state,
      date: action.input
    }

    case 'SET_DATA':
      return {
        ...state,
        data: action.input
      }
    
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.input]
      }

    case 'DELETE_TODO':
      const todos = state.todos.filter(todo => {
        return todo.id !== action.input
      })
      return {
        ...state,
        todos
      }

    case 'PRINT_PDF':
      const doc = new jsPDF('landscape');  
      let bodyData = [];
      let i = 0;

      state.todos.map(todo => {
        bodyData[i] = [todo.id, '', `${todo.startTime} - ${todo.endTime}`, todo.todo, todo.info];
        return i++
      })
      bodyData[0] = [state.todos[0].id, state.date, `${state.todos[0].startTime} - ${state.todos[0].endTime}`, state.todos[0].todo, state.todos[0].info]
    
      doc.autoTable({
        head: [['No','Tanggal','Waktu','Uraian Kegiatan','Keterangan','Validasi Pimpinan']],
        body: bodyData
      })
        
      console.log(bodyData)
      // doc.save(state.date);
      return state

    default:
      return state  
  }
}

export default rootReducer;