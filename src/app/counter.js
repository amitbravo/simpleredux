export const increment = {
  type: 'increment'
}

export const decrement = {
  type: 'decrement'
}

// export const setvalue = (payload) => {
//   type: 'setvalue',
//   payload
// }

//store , action
const initialState = 30

const counterReducer = (state = initialState, action) => {

  if(action.type == 'increment'){
    return state = state + 1
  }
  if(action.type == 'decrement'){
    return state = state - 1
  }
  return state
}

export default counterReducer


//import { increment, decrement,  setvalue } from './counter'
//import counterReducer from 'counter'
