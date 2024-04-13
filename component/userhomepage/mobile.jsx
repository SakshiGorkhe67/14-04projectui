import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import homebanner from './images/homebanner.jpeg';
import homebanner1 from './images/homebanner1.jpg';
import homebanner3 from './images/homebanner3.jpg';
import laptop from './images/laptop.jpeg';
import Headertop from "./HeaderTop";
import HomeNavbar from "./navbar";
import Footer from "./Footer";
import "../userhomepage/css/shop.css";
import list from "../userhomepage/data";
import Cards from "./Cards";
import  list1 from "../userhomepage/mobiledata"
import mobilecard from "../userhomepage/mobilecard"

function Mobile({handleClick}) {
  const [show,setShow]=useState(true);
  const[cart,setCart]=useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      }));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <>
      <Headertop size={cart.length} setShow={setShow}/>
      <HomeNavbar/>

      <div class="container1">
        <ol class="breadcrumb ">
          <li class="list-item px-2 text-secondary ">
            <Link to="/userhome">Home</Link>
          </li>
          <li class="list-item px-2 text-secondary">
            <Link to="/shop">Shop</Link>
            
          </li>
          <li class="list-item px-2 text-secondary">
          <Link to="/shop">Electronics</Link>
            
          </li>

        </ol>

        {/*Top Banner*/}
      </div>
      <div id="carouselExampleControls" class="carousel slide centered-carousel" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={homebanner1}alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={homebanner3} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={homebanner} alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <section class="item-section">
        {
          list.map((item)=>(
            <mobilecards item={item} key={item.id} handleClick={() => addToCart(item)}/>
          ))
        }
      </section>

      

    <Footer/>

    </>
  );
} export default Mobile;