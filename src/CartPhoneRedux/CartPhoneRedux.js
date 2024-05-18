import React, { Component } from 'react';
import ListPhoneRedux from './ListPhoneRedux';
import ModalCart from './ModalCart';
import{connect} from 'react-redux'
 class CartPhoneRedux extends Component {
  sumQuantity=()=>{
    return this.props.cartPhone.reduce((sumQuantity,itemPhone)=>{
             return sumQuantity+=itemPhone.soLuong
    },0)
  }
  render() {
    return <div>
        <div className='container'>
             <h1 className='text-center'>Danh sách sản phẩm</h1>
             <div className="text-right">
                    <span style={{ width: 17, cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-cart mr-5"><i className="fa fa-cart-arrow-down"></i>({this.sumQuantity()}) Giỏ hàng</i>
                    </span>
                </div>  
             <ListPhoneRedux/>
            <ModalCart/>
        </div>
    </div>;
  }
}
const mapStateToProps=(state)=>{
  return{
    cartPhone:state.stateCart.cart
  }
}
export default connect(mapStateToProps)(CartPhoneRedux)