
const initialState = {
    toDo:[],
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            action.payload.id = state.toDo.length
            return {...state, toDo:[...state.toDo, action.payload]}
        case 'SET_COMPLETE':
            return {}
        default:
            return state;
    }
}