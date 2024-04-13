import React,{useState} from 'react';

//import Navbar from './component/navbar';
import Home from './component/Admin/Home';
import AddProduct from './component/Admin/AddProduct';
import EditProduct from './component/Admin/EditProduct'; 
import AddCategory from './component/Admin/AddCategory';
import { Routes, Route } from 'react-router-dom';

//import AboutUs from './component/pages/AboutUs';
//import ContactUs from './component/pages/Contact';
import AllProductList from './component/Admin/AllProductList';
import AllCategoryList from './component/Admin/AllCategoryList';
/**************************USER IMPORT********************************** */
import UserHome from './component/userhomepage/UserHome';
import Shop from './component/userhomepage/shop';
import Login from './component/login/Login';
import Register from './component/login/Register';

//import CategoryList from './component/CategoryList';
//import CategoryForm from './component/CategoryList';
import Cart from './component/userhomepage/Cart';

import UsersList from './component/Admin/userList';
import Mobile from './component/userhomepage/mobile';
function App() {
  const [show,setShow]=useState(true);
  const[cart,setCart]=useState([]);
  const[warning,setWarning]=useState(false);
  // const handleClick=(item)=>{
  //   let isPresent=false;
  //   cart.forEach((product)=>{
  //     if(item.id===product.id)
  //     isPresent=true;
  //   })
  //   if(isPresent)
  //   alert("item is already present")
  // setCart([...cart,item]);
  // }
  const handleClick = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  return (
   
    <div className="App">
      <React.Fragment>
        
      </React.Fragment>
     
           
        <Routes>
     
          <Route path='/' element={<Home />} />
          <Route path='/userhome' element={<UserHome/>}/>
          {
            show?<Route path='/shop' element={<Shop handleClick={handleClick}/>}/>:<Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
          }
          <Route path='/mobile'element={<Mobile/>}/>
          
         {/**<Route path ='/contact' element={<ContactUs/>}/> */} 
        {/**  <Route path='/about' element={<AboutUs/>}/>*/} 
          
          {/**admin routes */}
          <Route path='/home' element={<AllProductList />} />
           <Route path='/allcat' element={<AllCategoryList />} />
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/addCategory' element={<AddCategory />} /> 
       {/**<Route path='/allcat'element={<CategoryForm/>}/> */} 
       <Route path="/editProduct/:id" component={<EditProduct/>} />
       <Route path="alluser" elemment={<UsersList/>}/>
       <Route path='/login' element={<Login/>} />
       <Route path='/register' element={<Register/>} />
        </Routes>
    



    </div>
  );
}

export default App;