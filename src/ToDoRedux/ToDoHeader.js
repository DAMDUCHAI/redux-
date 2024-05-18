import React, { Component } from 'react'

export default class ToDoHeader extends Component {
  render() {
    return (
 <div className='row text-center'>
   <div className='col-12'>
   <h1 className='mt-4 '>To-Do List</h1>
          <h3 className='mt-4'>Enter text into the input field to add items to your list.</h3>
          <h3 className='mt-4'>Click the 'X' to remove the item from your list.</h3>
          <h3 className='mt-4'>Click the item to mark it as complete.</h3>
   </div>
         

 </div>
          
     
    )
  }
}
