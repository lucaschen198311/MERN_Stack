import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from '../components/ProductForm';
import { Link, navigate } from "@reach/router";
import styles from './addprod.module.css';
const AddProduct = () => {
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({});
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("http://localhost:8000/api/authenuser", {withCredentials: true});
        console.log(response);
        setUser({...response.data});
      } catch (error) {
        console.log(error.response);
      }
    }

    async function getCart() {
      try {
        const response = await axios.get("http://localhost:8000/api/cart", {withCredentials: true});
        console.log(response.data.items);
        setItems([...response.data.items]);
        console.log(items);
      } catch (error) {
        console.log(error.response);
      }
    }

    getUser();
    getCart();
  }, []);

  useEffect(()=>{
    console.log(user);
    if(user){
      const total = items.reduce((total, item)=>{
        const updatedTotal = total + item.quantity;
          return updatedTotal;
      }, 0);
      setTotal(total);
      console.log(total);
    }

  }, [user, items])

  const addProd = (prod) => {
    axios.post('http://localhost:8000/api/products', prod, 
    {
      withCredentials: true
    })
        .then(res=>{
            console.log(res);
            navigate("/home/admin");
        })
        .catch(err=>{
            setErrors(err.response.data.errors);
        })
  }
  const handleLogout = () => {
    axios
      .post("http://localhost:8000/api/logout")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    
    navigate("/")
  };

  return (
    <div>
        <div className={styles.header}>
            <h1>Add Product</h1>
            <div className={styles.navbar}>
                <Link className={styles.navlink} to={"/home"}>Home</Link>
                <Link className={styles.navlink} to={"/home/cart"}>Shopping Cart {}</Link>
                <em className={styles.cartTotal}>{total}</em>
                <Link className={styles.navlink} to={"/home/admin"}>Admin</Link>
                <Link className={styles.navlink} to={"/home/order"}>Orders</Link>
                <button className={styles.navbtn} onClick={() => handleLogout()}>Logout</button>
                <span>Hello {user.userName}</span>
            </div>
        </div>
        <ProductForm initTitle="" initImg_url="" initPrice="" initCategory="" 
        initDescription="" onSubmitProp={addProd} errors={errors} />
        <div className={styles.footer}>
        <p className={styles.foottext}>Copyright@2021</p>
      </div>
    </div>
  );
};

export default AddProduct;
