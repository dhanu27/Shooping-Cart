import React from 'react';
import Cart from './Cart';
import NavBar from './Navbar';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [{
        price: 999,
        title: 'Mobile Phone',
        qty: 10,
        img: 'https://vlebazaar.in/image/cache/catalog/-Apple-iPhone-11-Pro-Max-Midnight-Green-256-GB-p/-Apple-iPhone-11-Pro-Max-Midnight-Green-256-GB-p-0-550x550h.jpg',
        id: 1
      },

      {
        price: 990,
        title: 'Watch',
        qty: 4,
        img: 'https://images-na.ssl-images-amazon.com/images/I/910D0vQR2HL._UL1500_.jpg',
        id: 2
      },

      {
        price: 19999,
        title: 'Laptop',
        qty: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/61g8k9BR0BL._SL1126_.jpg',
        id: 3
      }
      ]
    }
  }
  handleIncreaseQuantity = (product) => {
    console.log("Hey increase", product);
    console.log(this.state);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log("Hey decrease", product);
    if (product.qty === 0)
      return;
    console.log(this.state);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty -= 1;
    this.setState({
      products: products
    })
  }
  handleDeleteQuantity = (id) => {
    console.log("Hey Delelte", id);
    console.log(this.state);
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    })
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.map((product) => { count += product.qty });
    console.log(count);
    return count;
  }
  getTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.qty * product.price
    });
    return total;
  }
  render(){
      const {products}=this.state;
   return (
        <div className="App">
        <NavBar
          Count={this.getCartCount()}
         />  
        <Cart
           products={products}
           onIncreaseQuantity={this.handleIncreaseQuantity}
           onDecreaseQuantity={this.handleDecreaseQuantity}
           onDeleteCart={this.handleDeleteQuantity}
        />
       <div style={{padding:10,fontSize:20}}>TOTAL : {this.getTotal()}</div>  
       </div>
     )
   }
}

export default App;
