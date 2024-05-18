

const listDice = {
  arrayDice: [
    { value: 1, img: './img/gameDice/1.png' },
    { value: 2, img: './img/gameDice/2.png' },
    { value: 3, img: './img/gameDice/3.png' },

  ],
  numberWin:0,
  numberPlay:0,
  chooseBtn:'NOT_CHOOSE',
  check:false
}
const DiceReducer = (stateDice = listDice, action) => {
  switch (action.type) {
    case 'PLAY_GAME': {

      //kiem tra da chon nut chooBtn chua
      if(stateDice.chooseBtn === 'NOT_CHOOSE'){
        alert('Invite you choose EVEN or ODD')
        return;
      }
      else{
        stateDice.numberPlay +=1;
      }

      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {

        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        let xucXacNgauNhien = { value: soNgauNhien, img: `./img/gameDice/${soNgauNhien}.png` };
        mangXucXacNgauNhien.push(xucXacNgauNhien);
       
      }
       //Gán state mangXucXac = mangXucXacNgauNhien
       stateDice.arrayDice = mangXucXacNgauNhien;

       //tinh tong cua  con xux xac
       let sumDice= stateDice.arrayDice.reduce((sumDice,dice,index)=>{
         return sumDice +=dice.value
       },0);

       if(sumDice % 2==0 && stateDice.chooseBtn==='EVEN'){
                    stateDice.numberWin +=1;
                    stateDice.check=true;
       }
       if(sumDice % 2!=0 && stateDice.chooseBtn==='ODD'){
        stateDice.numberWin +=1;
        stateDice.check=true;
      }
   
      stateDice.chooseBtn = 'NOT_CHOOSE';


      return { ...stateDice }
    } break;

    case 'CHOOSE_BTN':{
         stateDice.chooseBtn=action.msgChoose;

      return { ...stateDice }
    }break;

    default: return { ...stateDice }
  }
}


export default DiceReducer
