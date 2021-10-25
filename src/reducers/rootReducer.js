


function rootReducer(state = [], action)  {
    state = {
        operators: ['/','*','+','-','=', '^'],
        actionButtons:['c', '+/-', '(', ')'],
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        lastFunctions: [],
        lastResults:[]
    }
    switch (action.type) {
        case 'FETCH_PLAYLISTS':
            return (
                action.playlists.data
            )
        case 'ADD_PLAYLIST':
            return (
                action.playlists.data
            )
        case 'DELETE_PLAYLIST':
            const idx = state.findIndex(playlist => playlist.id === action.id);
            return [...state.slice(0,idx), ...state.slice(idx+1)]  
        
        default:
            return state;
            }
        }
   
export default rootReducer;



