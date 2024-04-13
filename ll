import React from "react";
import { Link } from 'react-router-dom';
// import Headertop from "../inc/headertop.js";
// import Headertop from "../inc/headertop";

//import HomeNavbar from "../inc/navbar";
import Fire3 from './images/Fire3.jpeg';
/*import lenevo from './images/lenevo.jpeg';
import speaker from './images/speaker.jpeg';
import Samsung2 from './images/Samsung2.jpeg';
import megha from './images/megha.jpg';
import brand1 from './brand1.jpeg';
import brand2 from './images/brand2.jpeg';
import brand3 from './images/brand3.jpeg';
import brand4 from './images/brand4.jpeg';
import brand5 from './images/brand5.jpeg';
import brand6 from './images/brand6.jpeg';
import homebanner from '../images/homebanner.jpeg';*/
//import './userhome.css';

//import './brans.css';

function UserHome() {
  return (
    <>
      <Headertop/>
      {/* <HomeNavbar /> */}
      
      <div class="container1">
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
          

          {/*Top Banner*/}
        </div>
       <div id="carouselExampleControls" class="carousel slide centered-carousel" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src={homebanner}  alt="First slide"/>
       <Link to="/about"> <button type="button" class="btn btn-outline-primary carousel-button" >SHOPNOW</button></Link>
        
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="" alt="Second slide"/>
        <Link to="/about"> <button type="button" class="btn btn-outline-primary carousel-button" >SHOPNOW</button></Link>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={homebanner}  alt="Third slide"/>
        <Link to="/about"> <button type="button" class="btn btn-outline-primary carousel-button" >SHOPNOW</button></Link>
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
               
      <div>

      <h4 class="cardhead">  Shop by Brands</h4>
      <marquee>
        <div class="scroll-container">
          <ul class="brand-list">
            <li><img src={brand3} alt="" /></li>
            <li><img src={brand2} alt="" /></li>
            <li><img src={brand4} alt="" /></li>
            <li><img src={brand1} alt="" /></li>
            <li><img src={brand5} alt="" /></li>
            <li><img src={brand6} alt="" /></li>
          </ul>
        </div>
      </marquee>
      </div>

      <h4 className="cardhead">Explore Popular Categories</h4>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
      
        <div className="card" style={{ width: "14rem", margin: "10px 5px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
        <Link to="/about">  <img className="card-img-top" src={lenevo} alt="Card image cap" /></Link>
          <div className="card-body">
          <Link to="/about">   <h3 className="card-des">Computer & Laptops</h3></Link>  

          </div>
        </div>
       
        <div className="card" style={{ width: "14rem", margin: "20px 5px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
        <img className="card-img-top" src={Samsung2} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-des">Smart Phones</h3>
          </div>
        </div>
        <div className="card" style={{ width: "14rem", margin: "20px 5px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
          <img className="card-img-top" src={megha} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-des">Monitor</h3>
          </div>
        </div>
        <div className="card" style={{ width: "14rem", margin: "20px 5px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
          <img className="card-img-top" src={speaker} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-des">Audio</h3>
          </div>
        </div>
        <div className="card" style={{ width: "14rem", margin: "20px 5px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
          <img className="card-img-top" src={Fire3} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-des">Smart Watches</h3>
          </div>
        </div>

      </div>
     <Footer /> 

    </>
  );
}

export default UserHome;
