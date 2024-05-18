import React, { Component } from 'react'
import {connect} from 'react-redux';

export  class ToDoSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }
      
    handleChange(event) {
        this.setState({value: event.target.value});

      }
  

  render() {
    return (
    <div className="row  ">
<div className='col-12 d-flex justify-content-center'>
<form >
    <div className="form-group">
<div className='d-flex'>
<input type="text" className="form-control bg-info text-light" defaultValue={this.state.value} onChange={this.handleChange} />
<i className="fas fa-plus-circle ml-3 display-4" style={{cursor:'pointer',color:'red'}}  onClick={()=>{this.props.addTodo(this.state.value)}}></i>

</div>
    </div>
  </form>
</div>
</div>

    )
  }
}

const mapStateToProps=(state)=>{
    return{
        listTodo:state.TodoReducer
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addTodo:(item)=>{
              let action={
                  type:'ADD_ITEM',
                  item
                 
               
              }
           
              dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoSearch)