import React, { Component } from 'react'
import {connect} from 'react-redux';
export  class ToDoItem extends Component {
  render() {
    return (
      <div >
    <li onClick={()=>{this.props.changeTodo(this.props.item.id)}} className="list-group-item mb-3" style={{background:this.props.item.isClick ?'green':'pink',cursor:'pointer'}}>{this.props.item.value}<i style={{cursor:'pointer',}} onClick={()=>{this.props.deleteTodo(this.props.item.id)}} className="fas fa-times float-right"></i></li>
 
   </div>

    )
  }
}
const mapStatetoProps=(state)=>{
    return{
        listTodo:state.TodoReducer
    }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    deleteTodo:(id)=>{
        let action={
          type:'DELETE_ITEM',
          id
        }
        dispatch(action)
    },
    changeTodo:(id)=>{
      let action={
        type:'CHANGE_TYPE',
        id
      }
      dispatch(action)

    }
  }
}
export default connect(mapStatetoProps,mapDispatchToProps)(ToDoItem)