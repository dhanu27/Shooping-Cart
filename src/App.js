import React from 'react';
import Cart from './Cart';
import NavBar from './Navbar';
import * as firebase from 'firebase';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading:true 
    } 
    this.db=firebase.firestore(); 
  }
  handleIncreaseQuantity = (product) => {
    console.log("Hey increase", product);
    // console.log(this.state);
    const { products } = this.state;
    const index = products.indexOf(product);
            // products[index].qty += 1;
            // this.setState({
            //   products: products
            //    });      
      const docRef= this.db.collection('products').doc(products[index].id); 
      docRef.update({
         qty:products[index].qty+1  
      }).then(()=>{
        console.log("Product updated successfully");
      }).catch(()=>{
        console.log("Error in updation");
      })      
  }
  handleDecreaseQuantity = (product) => {
    console.log("Hey decrease", product);
    if (product.qty === 0)
      return;
    console.log(this.state);
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty -= 1;
    // this.setState({
    //   products: products
    // })
    const docRef=this.db.collection('products').doc(products[index].id);
   docRef.update({
     qty:products[index].qty-1
   }).then(()=>{
    console.log("Product updated successfully");
   }).catch(()=>{
    console.log("Error in updation");
   })
  }
  handleDeleteQuantity = (id) => {
    console.log("Hey Delelte", id);
    console.log(this.state);
    const docRef=this.db.collection('products').doc(id);

    docRef.delete().then(()=>{"Delelted Sucessfully"}).catch(()=>{"Error in Deleting product"});
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
  addProduct =()=>{
      this.db
      .collection("products")
      .add({
        img:'',
        titile:'Tube Light',
        qty:10,
        price:100
      })
      .then((docRef)=>{
        console.log("Product has been added"); 
      }).catch((error)=>{
        console.log("Error in add product");
      });
  }

  componentDidMount(){
    firebase.firestore()
       .collection('products')
       .onSnapshot((snapshot)=>{
        console.log(snapshot);
        const products=snapshot.docs.map((doc)=>{
          const data=doc.data();
          data["id"]=doc.id;
          return data;
        });
        console.log(products);
        this.setState({
          products :products,
          loading:false
        })
      });
  }
  render(){
     console.log("Render");
      const {products,loading}=this.state;
   return (
        <div className="App">
        <NavBar
          Count={this.getCartCount()}
         />  
        <button onClick={this.addProduct} style={{padding:20,fontSize:10}}>Add Product</button>
        <Cart
           products={products}
           onIncreaseQuantity={this.handleIncreaseQuantity}
           onDecreaseQuantity={this.handleDecreaseQuantity}
           onDeleteCart={this.handleDeleteQuantity}
        />
       <div style={{padding:10,fontSize:20}}>TOTAL : {this.getTotal()}</div>
         {loading&&<h1>Loading products ...</h1>}
       </div>
     )
   }
}

export default App;
