import React, { Component } from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {ButtonContainer} from "./Button"

export default class Modal extends Component {
    
    render() {
        
        return (
            <ProductConsumer>
                {(value)=>{
                    const {img,title,price}=value.detailProduct;
                    if(!value.modalOpen){
                        return null;
                    }else{
                        return (
                            <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h1>Item added to cart</h1>
                                        <img src={img} alt="product" className="img-fluid"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price : ${price}</h5>
                                        <Link to="/">
                                            <ButtonContainer onClick={value.closeModal} >Back to Store</ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={value.closeModal}>Cart</ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                           



                       </ModalContainer>

                        )
                           
                        
                        
                            
                      
                       
                     
 
                    }
                }}
            </ProductConsumer>
        )
    }
}
const ModalContainer=styled.div`

  /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4);
  display:flex;
  align-items:center;
  justify-content:center; 
  border-radius:4rem;/* Black w/ opacity */


#modal{
    background:var(--mainWhite);
}


`

