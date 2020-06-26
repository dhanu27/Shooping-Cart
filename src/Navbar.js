import React from 'react';
const NavBar=(props)=>  {
   return (
        <div className="nav"> 
          <div className="left-navbar">
           </div>    
           <div className="cart-icon">
               <img style={styles.image} src="https://image.flaticon.com/icons/svg/1170/1170627.svg"/>
                <span  className="show-number">{props.Count}</span> 
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