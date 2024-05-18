import {combineReducers} from 'redux';
import TodoReducer from './TodoRedecer'

import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import CartPhoneReducer from './CartPhoneReducer';
import DiceReducer from './DiceReducer';
import GameOanTuXiReducer from './GameOanTuXiReducer';
import BaiTapDatVeReducer from './BookingTicketReducer';
const rootReducer = combineReducers({ //store tổng của ứng dụng
    stateGioHang: BaiTapGioHangReducer, //state giỏ hàng
    stateCart: CartPhoneReducer, //state gio hang tu lam
    stateDice:DiceReducer,
    stateGameOTX:GameOanTuXiReducer,
    BaiTapDatVeReducer,
    TodoReducer


})

export default rootReducer;