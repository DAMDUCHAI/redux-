import React, { Component } from 'react';
import '../DiceExercise/DiceExercise.css'
import DisplayDice from './DisplayDice';
import {connect} from 'react-redux'
class DiceExercise extends Component {
  fireworks=(check)=>{
   if(check){
     return <div class="pyro"><div class="before"></div><div class="after"></div></div>
   }

  }
  render() {

    return <div className='game-dice container-fruid'>
      <h1 className='text-center mt-5 title'>Game Dice</h1>
     {this.fireworks(this.props.stateDice.check)}
      <div className="row text-center">
        <div className='col-4'>
          <button onClick={() => { this.props.chooseBtn('EVEN') }} className='btn btn-success p-5 mt-4 btn-choose'>EVEN</button>
        </div>
        <div className='col-4'>
          <DisplayDice />
        </div>
        <div className='col-4'>
          <button onClick={() => { this.props.chooseBtn('ODD')}} className='btn btn-success p-5 mt-4 btn-choose'>ODD</button>
        </div>
      </div>


      <div className="row text-center">
        <div className='col-12'>
          <button onClick={() => {this.props.playGame()}} className='btn btn-danger  mt-5 btn-play'>Play now</button>
        </div>

      </div>


      <div className="row text-center">
        <div className='col-12'>
        <h5 className='mt-3'>You choose :<span>{this.props.stateDice.chooseBtn}</span></h5>
              <h5 className='mt-3'>Number play :{this.props.stateDice.numberPlay}</h5>
              <h5 className='mt-3'>Number win  :{this.props.stateDice.numberWin}</h5>
        </div>

      </div>
    </div>;
  }
}
const mapStateToProps=(state)=>{
  return{
    stateDice:state.stateDice
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    playGame:()=>{
      let action={
        type:'PLAY_GAME',

      }
      dispatch(action);
    },
    chooseBtn:(msgChoose)=>{
      let action={
        type:'CHOOSE_BTN',
        msgChoose
      }
     
      dispatch(action);
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(DiceExercise)