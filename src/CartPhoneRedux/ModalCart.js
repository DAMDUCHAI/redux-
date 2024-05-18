import React, { Component } from 'react';
 import{connect} from 'react-redux'

 class ModalCart extends Component {

  sumMoney=()=>{
    return this.props.cartPhone.reduce((sumMoney,itemPhone)=>{
             return sumMoney+=(itemPhone.soLuong * itemPhone.giaBan);
    },0)
  }
  renderItemCart=()=>{
    return this.props.cartPhone.map((itemCart,index)=>{
      return <tr key={index}>
      <td >{itemCart.maSP}</td>
      <td>{itemCart.tenSP}</td>
      <td><img src={itemCart.hinhAnh} alt={itemCart.hinhAnh} width={50} height={50}/></td>
      <td >{itemCart.giaBan.toLocaleString()}</td>
      <td>
     <button className='btn btn-success mr-2' onClick={()=>{this.props.changeQuantity(itemCart.maSP,-1)}}>-</button>
        {itemCart.soLuong}
        <button className='btn btn-success ml-2' onClick={()=>{this.props.changeQuantity(itemCart.maSP,1)}}>+</button>
        </td>
      <td><button className='btn btn-danger ' onClick={()=>{this.props.removeCart(itemCart.maSP)}}>Xoá</button></td>
    </tr>
    })
  }

  render() {
    

    return  <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Cart phone</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
        <div className="modal-body">
          <table class="table">
            <thead>
              <tr>
                <th>MaSP</th>
                <th>TenSP</th>
                <th>HinhanhSp</th>
                <th>GiaSp</th>
                <th>SoluongSp</th>
                <th>HanhDong</th>
              </tr>
            </thead>
            <tbody>
              {this.renderItemCart()}
              <tr>
                <td colSpan={5}></td>
    <td >Sum: {this.sumMoney().toLocaleString()}</td>
  </tr>
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>;


  }
}



const mapStateToProps=(state)=>{
  return{
    cartPhone:state.stateCart.cart
  }
}


const mapDispatchToProps=(dispatch)=>{
  return{
    removeCart:(maSP)=>{
      let action ={
        type:'REMOVE_CART',
        maSP
      }
      dispatch(action);
    },
    changeQuantity:(maSP,number)=>{
      let action={
        type:'CHANGE_QUANTITY',
        maSP,number
      }
      dispatch(action);
    }
  }
}



  export default connect(mapStateToProps,mapDispatchToProps)(ModalCart)