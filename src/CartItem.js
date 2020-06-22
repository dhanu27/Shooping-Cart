import React from 'react';

class CartItem extends React.Component{
    constructor(){
       super();
        this.state={
         title:"Phone",
         price:999,
         qty:1
        }
    //    this.increasingQuantity=this.increasingQuantity.bind(this); 
    }
    increasingQuantity=()=>{
        console.log("this.state",this.state);
    }
 render(){
     const{title,price,qty}=this.state;
     return (
         <div className="cart-item">
           <div className="left-block">
                <img style={style.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
               <div style={{fontSize:18, color:'slategray'}}>Price :Rs. {price}</div>
               <div style={{fontSize:18 ,color:'slategray'}}>Quantiity : {qty}</div>
                <div className="actions">
                  
                       <img alt="decrease" 
                       className="actions-icon" src="https://image.flaticon.com/icons/svg/1828/1828899.svg"
                       />
                       <img alt="increase"
                        className="actions-icon" src="https://image.flaticon.com/icons/svg/1828/1828919.svg"
                        onClick={this.increasingQuantity} />
                       <img  className="actions-icon" src="https://www.flaticon.com/premium-icon/icons/svg/2920/2920712.svg"/>

                </div>
            </div> 
         </div>
     );
 }
}

 const style={
   image:{
       height:110,
       width:110,
       borderRadius:4,
       background:'slategray'
   }
 } 


export default CartItem;
