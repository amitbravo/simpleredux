const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const SETVALUE = 'setvalue'

export const increment = {
  type: INCREMENT
}

export const decrement = {
  type: DECREMENT
}

export const setvalue = (payload) => ({
  type: SETVALUE,
  payload
})

//store , action
const initialState = {
  loading: false,
  counter: 30
}
//redux use immutable


const counterReducer = (state = initialState, action) => {


  switch(action.type) {

    case INCREMENT:
       return {...state, counter: state.counter + 1 };
    case DECREMENT:
        return {...state, counter: state.counter - 1 };
    case SETVALUE:
          return {...state, counter: action.payload }
    default:
        return state;

  }


}

export default counterReducer


//import { increment, decrement,  setvalue } from './counter'
//import counterReducer from 'counter'
