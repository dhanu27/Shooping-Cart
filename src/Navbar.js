import React from 'react';
import CartItem from './CartItem'
const NavBar=()=>  {
   return (
        <div className="nav"> 
          <div class="left-navbar">
           </div>    
           <div className="cart-icon">
               <img style={styles.image} src="https://image.flaticon.com/icons/svg/1170/1170627.svg"/>
                 <span  className="show-number">3</span> 
           </div>
        </div> 
   )
}
const styles = {
    image: {
      height:50,
      width: 50
    }
  }


export default NavBar; 