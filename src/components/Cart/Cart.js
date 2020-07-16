import React, { Component } from 'react';
import Title from "../Title";
import {ProductConsumer} from "../../context";
import CartList from "./CartList";
import CartColumns from './CartColumns';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
            {(value)=>{
                const {cart}=value;
                
                if(cart.length>0){
                   
              return(
                <React.Fragment>
                <Title name="Your" title="cart"/>
                <CartColumns/>

              <CartList value={value}/>
              <CartTotals value={value}/>
              
              </React.Fragment>) 
         
                }else{
                    return( 
                        <Title name="cart" title="is currently empty"/>
                   
)
                   
                  
                }
               
            }}

           
           </ProductConsumer>
        )
    }
}
