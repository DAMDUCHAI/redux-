const stateGameOTX = {
    player: 'NOT_CHOOSE',
    imgPlayer:'./img/gameOanTuXi/0.png',
    playerComputer: 'NOT_CHOOSE',
    imgComputerPlayer:'./img/gameOanTuXi/0.png',
    numberPlay: 0,
    numberWin: 0,
    msgResult:''

}

const GameOanTuXiReducer = (state = stateGameOTX, action) => {
    switch (action.type) {
        case 'PLAY': {
            if (state.player === 'NOT_CHOOSE') {
                alert('Mời bạn chọn kéo, búa hoặc bao !')
                return;
            } else {
                state.numberPlay += 1;
            }


            //random cho nguoi may
            let random =Math.floor(Math.random() * 3);  //tao so ngau nhien tu 0-2
            state.playerComputer = random;
            state.imgComputerPlayer=`./img/gameOanTuXi/${random}.png`;

            //kiem tra ket qua
               
            if(state.player===0){
               
                if(state.playerComputer===0) {
                  state.msgResult='Bạn hòa';
                }
                if(state.playerComputer===1)
                {
                    state.msgResult='Bạn thắng';
                    state.numberWin +=1;
                }
                if(state.playerComputer===2)
                {
                    state.msgResult='Bạn thua';
                }
            }
            if(state.player===1){
                if(state.playerComputer===0)
                {
                    state.msgResult='Bạn thua';
                }
                if(state.playerComputer===1)
                {
                    state.msgResult='Bạn hòa';
                }
                if(state.playerComputer===2)
                {
                    state.msgResult='Bạn thắng';
                    state.numberWin +=1;
                }
            
            }
           else{
            if(state.playerComputer===0)
            {
                state.msgResult='Bạn thắng';
                state.numberWin +=1;
            }
            if(state.playerComputer===1)
            {
                state.msgResult='Bạn thua';
            }
            if(state.playerComputer===2)
            {
                state.msgResult='Bạn hòa';
            }
           }

          //reset nut chooseBtn
          state.player = 'NOT_CHOOSE';

            return { ...state }
        }; break

        case 'CHOOSE': {
            state.player = action.mgsChoose;
          state.imgPlayer=`./img/gameOanTuXi/${action.mgsChoose}.png`;
        
            return { ...state }
            
        }; break
        default: return { ...state }
    }

}

export default GameOanTuXiReducer;