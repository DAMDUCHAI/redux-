import React, { Component } from 'react';
import '../GameOanTuXi/GameOanTuXi.css'
import { connect } from 'react-redux'

 class GameOanTuXi extends Component {
  render() {
  
    return <div className='container-fruid game '>
   <div className="row text-center mt-3">
       
       <div className='col-4 '>
        
       <button className='p-5'> <img src={this.props.stateGameOTX.imgPlayer} alt='player.png' style={{width:60,height:60}}   /></button>

        <img src='./img/gameOanTuXi/player.png' alt='player.png' style={{width:360,height:360}}/>
       <div >
           <button onClick={()=>{this.props.choose(0)}}> <img src='./img/gameOanTuXi/0.png' alt='player.png' style={{width:60,height:60,cursor:'pointer'}}   /></button>
           <button onClick={()=>{this.props.choose(1)}}> <img src='./img/gameOanTuXi/1.png' alt='player.png' style={{width:60,height:60,cursor:'pointer'}} /></button>
           <button onClick={()=>{this.props.choose(2)}}> <img src='./img/gameOanTuXi/2.png' alt='player.png' style={{width:60,height:60,cursor:'pointer'}} /></button>
    
       </div>
       

       </div>
       <div className='col-4'>
           <h3 className='infor-game' >{this.props.stateGameOTX.msgResult}</h3>
           <h3>Số bàn thắng :<span>{this.props.stateGameOTX.numberWin}</span></h3>
           <h3>Số lần chơi :<span>{this.props.stateGameOTX.numberPlay}</span></h3>
           <button className='btn btn-success p-3 mt-5' onClick={()=>{this.props.playGame()}}>Play game</button>
       </div>
       <div className='col-4 '>
       <button className='p-5'> <img src={this.props.stateGameOTX.imgComputerPlayer} alt='playerComputer.png' style={{width:60,height:60}}   /></button>

       <img src='./img/gameOanTuXi/playerComputer.png' alt='playerComputer.png' style={{width:360,height:360}} />

       </div>
   </div>


    </div>;
  }
}

const mapStateToProps=(state)=>{
  return{
    stateGameOTX:state.stateGameOTX
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    playGame:()=>{
      let action={
        type:'PLAY',
      }
      dispatch(action);
    },
    choose:(mgsChoose)=>{
      
      let action={
        type:'CHOOSE',
        mgsChoose
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GameOanTuXi)