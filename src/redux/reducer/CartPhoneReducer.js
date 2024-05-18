
const stateCart = {
    cart:[]
}
const CartPhoneReducer=(state=stateCart,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':{
          let index= state.cart.findIndex((itemCart=>itemCart.maSP===action.cartPhone.maSP));
           if(index != -1){
               state.cart[index].soLuong +=1;
           }
           else{
               state.cart.push(action.cartPhone)
           }
           //cap nhat gio hang
           state.cart=[...state.cart];
            return {...state};
           
        } break;

        case 'REMOVE_CART':{
            let index = state.cart.findIndex((itemtCart)=> itemtCart.maSP===action.maSP);
            if(index !== -1){
                state.cart.splice(index,1);
            }
            //cap nhat lai gio hang
            state.cart=[...state.cart]
            return {...state};
        }break;

        case 'CHANGE_QUANTITY':{
            
            let index = state.cart.findIndex((itemtCart)=> itemtCart.maSP===action.maSP);
            if(index !== -1){
                if(state.cart[index].soLuong < 2 && action.number === -1){
                 alert('So luong san pham phai toi thieu la 1 !');
                 return;
                }
                state.cart[index].soLuong += action.number;
            }
              //cap nhat lai gio hang
              state.cart=[...state.cart];
              return {...state};
        }break;

        default :return {...state} 
      
    }
    
}
export default CartPhoneReducer