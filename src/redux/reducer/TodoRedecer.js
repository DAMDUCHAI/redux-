import { v1 as uuidv1 } from 'uuid';
const todoState={
    
    listTodo:JSON.parse(localStorage.getItem('listTodo')),
  

}

const TodoReducer=(state=todoState,action)=>{
switch(action.type){
  case 'ADD_ITEM':{
      if(action.item===''){
          alert('Input null :( ');
          return { ...state }
      }
       let item ={
           id:uuidv1(),
           value:action.item,
           isClick:false

       }
       state.listTodo.push(item);
       localStorage.setItem('listTodo', JSON.stringify( state.listTodo));
       
       return { ...state }
  }
  case 'DELETE_ITEM':{
      let index=state.listTodo.findIndex((item)=>item.id==action.id);
    if(index!= -1){
        state.listTodo.splice(index,1)
    }
    state.listTodo=[...state.listTodo]
    localStorage.setItem('listTodo', JSON.stringify( state.listTodo));

      return { ...state }
  }
  case 'CHANGE_TYPE':{
    let index=state.listTodo.findIndex((item)=>item.id==action.id);
  if(index!= -1){
      state.listTodo[index].isClick=!state.listTodo[index].isClick;
  }
  state.listTodo=[...state.listTodo]
  localStorage.setItem('listTodo', JSON.stringify( state.listTodo));

 
    return { ...state }
}
    default: return { ...state }
}
}
export default TodoReducer;