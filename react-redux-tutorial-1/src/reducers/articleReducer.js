const initialState = {
    article:[],
}

const articleReducer = (state=initialState, action)=>{
    if(action.type === 'ADD_ARTICLE'){
        return {...state, article:[...state.article, action.payload]};
    }else{
        return state;
    }
}

export default articleReducer;