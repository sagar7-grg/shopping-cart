import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const{clearCart,subTotal,cartTax,cartTotal}=value;
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={clearCart}>clear btn</button>
                </Link>
                   <div className="text-title">
                      <h5>subtotal:<strong>${subTotal}</strong></h5> 
                   </div>
                   <div className="text-title">
                      <h5>cartTax:<strong>${cartTax}</strong></h5> 
                   </div>
                   <div className="text-title">
                      <h5>total:<strong>${cartTotal}</strong></h5> 
                   </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
