import React, { Component } from 'react';
import {connect} from 'react-redux'
 class DisplayDice extends Component {


  renderImgDice=()=>{
   return this.props.listDice.map((dice,index)=>{
      return <img src={dice.img} alt={dice.img} style={{width:100,height:100}} key={index}></img>
    })
}

  render() {
    console.log(this.props.listDice)
    return <div className='mt-5'>
       {this.renderImgDice()}
    </div>;
  }
}

const mapStateToProps=(state)=>{
  return{
    listDice:state.stateDice.arrayDice
  }
}
export default connect(mapStateToProps)(DisplayDice)