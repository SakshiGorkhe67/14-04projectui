import React,{useState} from 'react';
import "../userhomepage/css/cart.css";

const Cart = ({cart,setCart}) => {
  const[price,setPrice]=useState(0);
  return (
    <article>
      {
        Cart?.map((item)=>(
          <div className="cart-box" key={item.id}>
           <div className="cart-img">
            <img src={item.image}/>
            <p>{item.name}</p>
           </div>
           <div>
            <button>+</button>
            <button>-</button>
           </div>
           <div>
            <span>{item.price}</span>
            <button>Remove</button>
           </div>

          </div>
        ))
      }
      <div>
        <span>Total Price of your Cart</span>
        <span>Rs -{price}</span>
      </div>
    </article>
  )
}

export default Cart;