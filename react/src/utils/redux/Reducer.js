import jsPDF from 'jspdf';
import 'jspdf-autotable';

const globalState = {
  date: '',
  data: {
    name: null,
    NIP: null,
    pos: null,
    bossName: null,
    bossPos: null,
    city: null,
    message: null
  },
  todos: [],
  alert: 0,
}

const rootReducer = (state = globalState, action) => {
  switch (action.type) {

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

    case 'INVALID_DATA':
      return {
        ...state,
        alert: 1
      }

    case 'CLOSE_ALERT':
      return {
        ...state,
        alert: 0
      }

    case 'PRINT_PDF':
      try {
        const doc = new jsPDF('landscape');
        let bodyData = [];
        let i = 0;

        state.todos.map(todo => {
          bodyData[i] = [todo.id, '', todo.time, todo.todo, todo.info];
          return i++;
        })
        bodyData[0] = [state.todos[0].id, state.date, state.todos[0].time, state.todos[0].todo, state.todos[0].info]

        doc.text('LAPORAN KEGIATAN HARIAN ASN', 100, 10);

        doc.setFontSize(12);
        doc.text(`Nama/NIP \t\t\t\t\t: ${state.data.name} / ${state.data.NIP}`, 20, 18);
        doc.text(`Jabatan \t\t\t\t\t    : ${state.data.pos}`, 20, 24);
        doc.text(`Nama atasan langsung \t\t    : ${state.data.bossName}`, 20, 30);
        doc.text(`Jabatan atasan langsung \t\t : ${state.data.bossPos}`, 20, 36);
        doc.text(`${state.data.city}, ${state.date}`, 218, 170);
        doc.setFontSize(10);
        doc.text('Pembuat laporan', 224, 174);
        doc.setFontSize(12);
        doc.text(state.data.name, 216, 196);
        doc.text(`Nip.${state.data.NIP}`, 216, 200);
        doc.autoTable({
          styles: { halign: 'center', fontSize: 12 },
          startY: 40,
          head: [['No', 'Tanggal', 'Waktu', 'Uraian Kegiatan', 'Keterangan', 'Validasi Pimpinan']],
          body: bodyData
        })

        doc.save(state.date);
        return {
          ...state,
          alert: 3
        }
      } catch (err) {
        return {
          ...state,
          alert: 2
        }
      }

    default:
      return state
  }
}

export default rootReducer;