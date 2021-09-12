//import logo from './logo.svg';
import './App.css';
import { Router } from "@reach/router";
import Main from "../src/views/Main";
import Userhome from "../src/views/Userhome";
import Login from "./views/Login";
import Register from "./views/Register";
import Cart from "./views/Cart";
import ProductDetail from "./views/ProductDetail";
import Admin from './views/Admin';
import AddProduct from './views/AddProduct';
import EditProduct from './views/EditProduct';
import Order from './views/Order';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Login path="/login" />
        <Register path="/register" />
        <Userhome path="/home" />
        <Cart path="/home/cart" />
        <ProductDetail path="/home/products/:product_id" />
        <Admin path="/home/admin"/>
        <AddProduct path="/home/admin/new-product" />
        <EditProduct path="/home/admin/edit-product/:product_id" />
        <Order path="/home/order" />
      </Router>
    </div>
  );
}

export default App;
