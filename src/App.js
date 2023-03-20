import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import CreateAccount from './Components/Login/CreateAccount';
import Login from './Components/Login/Login';
import ProductDetails from './Components/Products Details/ProductDetails';
import Products from './Components/Products/Products';
import UserDetails from './Components/UserDetails/UserDetails';



function App() {
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
