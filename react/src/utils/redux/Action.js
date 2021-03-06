export const SET_DATE = date => {
  return {
    type: 'SET_DATE',
    input: date
  }
}

export const SET_DATA = personalData => {
  return {
    type: 'SET_DATA',
    input: personalData
  }
}

export const ADD_TODO = todo => {
  return {
    type: 'ADD_TODO',
    input: todo
  }
}

export const DELETE_TODO = id => {
  return {
    type: 'DELETE_TODO',
    input: id
  }
}

export const PRINT_PDF = () => {
  return {
    type: 'PRINT_PDF',
  }
}

export const INVALID_DATA = () => {
  return {
    type: 'INVALID_DATA'
  }
}

export const INVALID_TODO = () => {
  return {
    type: 'INVALID_TODO'
  }
}

export const CLOSE_ALERT = () => {
  return {
    type: 'CLOSE_ALERT'
  }
}