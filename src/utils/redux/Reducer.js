import jsPDF from 'jspdf';
import 'jspdf-autotable';

const globalState = {
  date: '',
  data: {
    name: 'naruto',
    NIP: 123,
    pos: 'genin',
    bossName: 'kakashi',
    bossPos: 'jounin',
    city: 'konha'
  },
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
      
      doc.text('LAPORAN KEGIATAN HARIAN ASN', 100, 10);
      
      doc.setFontSize(12);  
      doc.text(`Nama/NIP \t\t\t\t\t: ${state.data.name} / ${state.data.NIP}`, 20, 18);
      doc.text(`Jabatan \t\t\t\t\t    : ${state.data.pos}`, 20, 24);
      doc.text(`Nama atasan langsung \t\t    : ${state.data.bossName}`, 20, 30);
      doc.text(`Jabatan atasan langsung \t\t : ${state.data.bossPos}`, 20, 36);
      doc.text(`${state.data.city}, ${state.date}`, 220, 170);
      doc.text('Pembuat laporan', 222, 174);
      doc.text(state.data.name, 216, 196);
      doc.text(`Nip.${state.data.NIP}`, 216, 200);
      doc.autoTable({
        styles: { halign: 'center', fontSize: 12 },
        startY: 40,
        head: [['No','Tanggal','Waktu','Uraian Kegiatan','Keterangan','Validasi Pimpinan']],
        body: bodyData
      })
        
      console.log(bodyData)
      doc.save(state.date);
      return state

    default:
      return state  
  }
}

export default rootReducer;