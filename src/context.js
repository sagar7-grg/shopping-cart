import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data';

const ProductContext=React.createContext();

class ProductProvider extends Component {
    state={
        products:JSON.parse(JSON.stringify(storeProducts)),
        detailProduct:detailProduct,
        modalOpen:false,
        cart:[],
        subTotal:0,
        cartTax:0,
        cartTotal:0
        
    }
    getItem=(id)=>{
        const product=this.state.products.find(item=>item.id===id);
        return product;
    }
    handleDetail=(id)=>{
        
        const product=this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })
    }
    addToCart=(id)=>{
        const {cart}=this.state;
        const product=this.getItem(id);
       product.inCart=true;
       product.count=1;
       product.total=product.price;
       cart.push(product);
       this.setState(()=>{
           this.addTotals();
       })
    
       

    }
    openModal=(id)=>{
        const product=this.getItem(id);
        this.setState(()=>{
            return {modalOpen:true}
        })
        

    }
    closeModal=()=>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }
    increment=(id)=>{
        let tempCart=[...this.state.cart];
        const selectedProduct=tempCart.find(item=>item.id===id);
        const index=tempCart.indexOf(selectedProduct);
        const product=tempCart[index];
        product.count=product.count+1;
        product.total=product.count*product.price;
        this.setState(()=>{
            return {
                cart:[...tempCart],
            
                
                
            }
        },()=>{
            this.addTotals();
        })
        
    }
    decrement=(id)=>{
        let tempCart=[...this.state.cart];
        const selectedProduct=tempCart.find(item=>item.id===id);
        const index=tempCart.indexOf(selectedProduct);
        const product=tempCart[index];
        product.count=product.count-1;
        if(product.count===0){
            this.removeItem(id);}
            else{
                product.total=product.count*product.price;
                this.setState(()=>{
                    return {
                        cart:[...tempCart],
                    
                        
                        
                    }
                },()=>{
                    this.addTotals();
                })
            }
       
    }
    removeItem=(id)=>{
        const product=this.getItem(id);
        let a=this.state.cart.indexOf(product);
        this.state.cart.splice(a,1);
        this.setState(()=>{
            return {cart:this.state.cart}
        })
        
        
    }
    clearCart=()=>{
        let len=this.state.cart.length;
        this.state.cart.splice(0,len);
        this.setState(()=>{
            return {cart:this.state.cart}
        })
    }
    addTotals=()=>{
        let subTotal1=0;
        this.state.cart.map(item=>{
            subTotal1+=item.total;
        })
        const subTax=subTotal1*0.1;
        const tax=parseFloat(subTax.toFixed(2));
        const total=subTotal1+tax;
        this.setState(()=>{
            return {
                subTotal:subTotal1,
                cartTax:tax,
                cartTotal:total
            }
        })
    }
   
    render() {
        return (
            <ProductContext.Provider value={
                {
                    ...this.state,handleDetail:this.handleDetail,addToCart:this.addToCart,openModal:this.openModal,closeModal:this.closeModal,increment:this.increment,decrement:this.decrement,removeItem:this.removeItem,clearCart:this.clearCart
                }
            }>
        
            {this.props.children}

                
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer=ProductContext.Consumer;
export {ProductProvider,ProductConsumer};
