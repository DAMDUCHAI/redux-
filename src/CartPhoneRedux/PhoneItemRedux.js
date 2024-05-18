import React, { Component } from 'react';
import {connect} from 'react-redux'
class PhoneItemRedux extends Component {
  render() {
    let { item } = this.props;
    return <div>
      <div className="card">
        <img className="card-img-top" src={item.hinhAnh} alt={item.hinhAnh} style={{width:250,height:250}}/>
        <div className="card-body">
          <h4 className="card-title">{item.tenSP}</h4>
          <p className="card-text">{item.giaBan.toLocaleString()}</p>
        </div>
        <button className='btn btn-success'  onClick={()=>{this.props.addToCart(item)}}>Add to Cart</button>
      </div>
    </div>

  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    addToCart:(newPhone)=>{
      let cartPhone={ maSP: newPhone.maSP, 
        tenSP: newPhone.tenSP,
         giaBan: newPhone.giaBan, 
         hinhAnh: newPhone.hinhAnh ,
         soLuong:1}

         let action={
           type:'ADD_TO_CART',
           cartPhone
         }
         dispatch(action)
    }
  }
}

export default connect(null,mapDispatchToProps)(PhoneItemRedux)