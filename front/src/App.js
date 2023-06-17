
import './App.css';
import Home from './pages/Home'
import {Route, Routes} from "react-router-dom";
import Basket from "./pages/Basket";
import Search from "./pages/Search";
import ItemDesc from "./pages/ItemDesc";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import About from "./pages/About";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/cart" element={<Basket />}/>
        <Route path="/product" element={<ItemDesc />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
  );
}

export default App;
