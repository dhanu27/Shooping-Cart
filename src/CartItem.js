import React from 'react';

const CartItem=(props)=> {
    const { price, title, qty } = props.product;
    const {product,
           onIncreaseQuantity,
           onDecreaseQuantity,
           onDeleteCart}=props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={product.img}/>
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick={()=>{onIncreaseQuantity(product)}}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
              onClick={()=>{onDecreaseQuantity(product)}}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              onClick={()=>{onDeleteCart(product.id)}}/>
          </div>
        </div>
      </div>
    );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;
  // constructor () {
  //   super();
    // this.state = {
    //   price: 999,
    //   title: 'Mobile Phone',
    //   qty: 1,
    //   img: ''
    // }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  // }
  // increaseQuantity = () => {
    // this.state.qty += 1;
    // console.log('this', this.state);
    // setState form 1
    // this.setState({
    //   qty: this.state.qty + 1
    // });
    // this.setState({
    //     qty: this.state.qty + 1
    //   });
    //   this.setState({
    //     qty: this.state.qty + 5
    //   });
      //Due to batching setstate render only once so it wait to end the of a function take the last one setstate  

    // setState form 2 - if prevState required use this
    // setstate is asynchronus
    // this.setState((prevState) => {
    //   return {
    //     qty: prevState.qty + 1
    //   }
    // },()=>{console.log(this.state);});
    // this.setState((prevState) => {
    //     return {
    //       qty: prevState.qty + 1
    //     }
    //   });
    //   this.setState((prevState) => {
    //     return {
    //       qty: prevState.qty + 1
    //     }
    //   }); //but in this we get increase on calling mulitiple times bcz we using th prestate but rendering in this case is also only 1 time   

    
  // }
  // decreaseQuantity = () => {
  //   const { qty } = this.state;

  //   if (qty === 0) {
  //     return;
  //   }
  //   // setState form 2 - if prevState required use this
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty - 1
  //     }
  //   });
  // }
  // testing=()=>{
  //    const promise=new Promise((resolve,reject)=>{
  //          setTimeout(()=>{
  //              resolve('done');
  //          },5000);
  //    });
  //   promise.then(()=>{
  //       // In asnynchronus function batching not work it will not wrapped up and excute at last but it work synchronously in that  
  //       this.setState({qty:this.state.qty+1},()=>{console.log("qty",this.state)});
  //       this.setState({qty:this.state.qty+1},()=>{console.log("qty",this.state)});
  //       this.setState({qty:this.state.qty+1},()=>{console.log("qty",this.state)});
  //       console.log(this.state);
  //   });
  // }
// form 2
        // this.setState((prevstate)=>{
        //     console.log(prevstate);
        //         prevstate.qty+=1
        //         console.log(prevstate);
        //     return prevstate;
        // });