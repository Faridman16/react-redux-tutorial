
export const addToDo = (toDo)=>(dispatch)=>{
    dispatch({
        type:'ADD_TODO',
        payload:toDo,
    })
}

export const setComplete = (toDo)=>dispatch=>{
    dispatch({
        type:'SET_COMPLETE',
        payload:{
            id:toDo.id,
            item:toDo.item,
            status:'line-through'
        }
    })
}
