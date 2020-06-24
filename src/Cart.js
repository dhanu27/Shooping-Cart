import React from 'react';
import CartItem from './CartItem'
class Cart extends React.Component {
    constructor () {
        super();
       this.state={ 
        products : [{
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: '',
          id:1
        },
        
        {price: 990,
        title: 'Watch',
        qty: 4,
        img: '',
        id:2
      },
      
     { price: 19999,
      title: 'Laptop',
      qty: 1,
      img: '',
      id:3
    }
    ]
   }
  } 
  handleIncreaseQuantity=(product)=>{
      console.log("Hey increase", product);
      console.log(this.state);
      const { products }=this.state;
      const index=products.indexOf(product);
      products[index].qty+=1;
      this.setState({
            products:products
      })
  }
  handleDecreaseQuantity=(product)=>{
    console.log("Hey decrease", product);
    if(product.qty===0)
      return ;
    console.log(this.state);
    const { products }=this.state;
    const index=products.indexOf(product);
    products[index].qty-=1;
    this.setState({
          products:products
    })
}
handleDeleteQuantity=(id)=>{
    console.log("Hey Delelte", id);
    console.log(this.state);
    const { products }=this.state;
    const items=products.filter((item)=>item.id!==id);
    this.setState({
          products:items
    })
}

  render(){
      const {products}=this.state;
   return (
        <div className="cart">
         {
             products.map((product)=>{
                 return <CartItem product={product}
                         key={product.id}
                         onIncreaseQuantity={this.handleIncreaseQuantity}
                         onDecreaseQuantity={this.handleDecreaseQuantity}
                         onDeleteCart={this.handleDeleteQuantity}/>
             })
         } 
        </div> 
   )
  }


}
export default Cart; 