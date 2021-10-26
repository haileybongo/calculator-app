


function rootReducer(state = {
    operators: ['/','*','+','-','=', '^'],
    actionButtons:['c', '+/-', '(', ')'],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    lastFunctions: [],
    lastResults:[]

}, action)  {

    switch (action.type) {
        case 'ADD_RESULT':
            debugger
            return {
                ...state,
                lastFunctions: [...state.lastFunctions, action.equation.join(' ')],
                lastResults: [...state.lastResults, action.finalResult]
            } 
        
        default:
            return state;
            }
        }
   
export default rootReducer;


// users: [],
// }, action){
//   switch (action.type) {
//     case 'ADD_USER':
//       console.log('adding ', action.user);
//       return {
//         ...state,
//         users: [...state.users, action.user]
//       }


