//Here we import our action types as constants from our actions folder.
import { INC_COUNT, DEC_COUNT } from '../actions/countActions';
// define initial state as a constant that gets passed as an argument to reducer function
const initialState = {
  count: 0
}
// each reducer  gets ALL actions, thats why i use a switch on action.type to let the specific reducer
//that relates to the action type known to return a new state object,
export default function reducer(state = initialState, action){
  let newCount = state.count + action.playoad;
  switch( (action.type) {
         case INC_COUNT:
            return {...state, count: newCount}
         case DEC_COUNT:
            return {...state, count: newCount}
         dafault:
            return state;
         }
         }
