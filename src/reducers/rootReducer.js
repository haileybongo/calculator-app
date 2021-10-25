


function rootReducer(state = [], action)  {
    state = {
        operators: ['/','*','+','-','=', '^'],
        actionButtons:['c', '+/-', '(', ')'],
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        lastFunctions: [],
        lastResults:[]
    }
    switch (action.type) {
        case 'ADD_RESULT':
            
            state.lastFunctions.unshift(action.equation)
            state.lastResults.unshift(action.finalResult)
            debugger
            return (
                state
            ) 
        
        default:
            return state;
            }
        }
   
export default rootReducer;



