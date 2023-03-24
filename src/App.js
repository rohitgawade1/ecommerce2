import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import CreateAccount from './Components/Login/CreateAccount';
import Login from './Components/Login/Login';
import ProductDetails from './Components/Products Details/ProductDetails';
import Products from './Components/Products/Products';
import UserDetails from './Components/UserDetails/UserDetails';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    fetchApi1();
    fetchApi();
  })
  
  async function fetchApi1() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    console.log(data)
    dispatch({type:'maindata',data:data})
  }

  async function fetchApi(){
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();
    dispatch({ type: "randomuserdata", data: data });
  };
  return (
    <div className="App">
        
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/users' element={<UserDetails/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/productdetails' element={<ProductDetails/>} />
          <Route path='/create-account' element={<CreateAccount/>} />
        </Routes>
    </div>
  );
}

export default App;
