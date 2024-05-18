import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import {connect} from 'react-redux';
export  class ToDoList extends Component {
  componentWillUnmount(){
    localStorage.setItem('listTodo', JSON.stringify(this.props.listTodo.listTodo));
      
  }
renderTodoItem=()=>{

    return this.props.listTodo.listTodo.map((item, key)=>{
        return  <div key={key}>
            <ToDoItem item={item}/>
            
        </div>
    })
}


  
  render() {

    return (
      <div className='row mt-5 d-flex justify-content-center'>
                <div className="card" style={{width: '30rem'}}>
  <ul className="list-group list-group-flush">
 {this.renderTodoItem()}
 
    
  </ul>
</div>
      </div>
    )
  }
}
const mapStatetoProps=(state)=>{
    return{
        listTodo:state.TodoReducer
    }
}
export default connect(mapStatetoProps)(ToDoList)