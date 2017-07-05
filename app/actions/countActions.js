// Here we create our action types as CONSTANTS in order to make error handling more straightforward
export const INC_COUNT = 'INC_COUNT';
export const DEC_COUNT = 'DEC_COUNT';
// An action is just a functionthat returns a type and a payload. 
// The payload in this case plus or minus one, so we can increament our decrement our counter
export function incrementCount() {
  return {
    type; INC_COUNT,
    payload: 1
  }
}
export function decrementCount() {
  return {
    type: DEC_COUNT,
    payload: -1
  }
}
    
    
