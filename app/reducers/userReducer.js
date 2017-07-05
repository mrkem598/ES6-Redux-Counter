// this returns a constant user
const initialState = {user: 'Guest'}
export default function reducer(state=initialState, action) {
    switch (action.type) {
      case 'CHANGE_USER':
        return {...state, user: action.payload}
      default:
        return state;
    }
}
