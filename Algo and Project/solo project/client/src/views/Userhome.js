import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, navigate} from "@reach/router";
import styles from './main_home_admin_view.module.css';
const Userhome = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({});
  const [category, setCategory] = useState("all");
  const [clickadd, setClickadd] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/${category}`);
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.log(error.response);
      }
    }
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
    getData();
    getUser();
    getCart()
  }, [clickadd, category]);

  useEffect(()=>{
    console.log(user);
    console.log(products);
    if(user){
      const total = items.reduce((total, item)=>{
        const updatedTotal = total + item.quantity;
          return updatedTotal;
      }, 0);
      setTotal(total);
      console.log(total);
    }

  }, [user, products, items])


  const handleLogout = () => {
    axios
      .post("http://localhost:8000/api/logout")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    
    navigate("/")
  };

  const handleAddToCart = async(e,product_id)=>{
    e.preventDefault();
    try{
        const response = await axios.put(`http://localhost:8000/api/cart/addtocart/${product_id}`, user, {withCredentials: true});
        console.log(response);
        setUser(response.data);
        setClickadd(!clickadd);
    } catch(error){
        console.log(error);
    }
  }
 
  return (
    <div>
        <div className={styles.header}>
            <h1>ShoppingOpedia</h1>
            <div className={styles.navbar}>
                <Link className={styles.navlink} to={"/home/cart"}>Shopping Cart</Link>
                <em className={styles.cartTotal}>{total}</em>
                <Link className={styles.navlink} to={"/home/admin"}>Admin</Link>
                <Link className={styles.navlink} to={"/home/order"}>Orders</Link>
                <button className={styles.navbtn} onClick={() => handleLogout()}>Logout</button>
                <span> Hello {user.userName}</span>
            </div>
        </div>
        <h2>Welcome Back: {user.userName}</h2>
        <div className={styles.input}>
          <select className={styles.select} name="category" value={category} onChange={e=>setCategory(e.target.value)}>
            <option value="all">all</option>
            <option value="food">food</option>
            <option value="digital">digital</option>
            <option value="book">book</option>
            <option value="clothe">clothe</option>
            <option value="furniture">furniture</option>
            <option value="electronic">electronic</option>
            <option value="service">service</option>
            <option value="not known">not known</option>
          </select>
        </div>
        <div className={styles.main}>
        {products &&
          products.map((product, index) => (
            <div className={styles.card} key={index}>
              <h3>{product.title}</h3>
              <img className={styles.prodImg} src={product.img_url} alt="product img" />
              <p className={styles.prodPrice}>Price $: {product.price}</p>
              <p className={styles.prodDescription}>{product.description}</p>
              <div className={styles.cardBottom}>
                  <button className={styles.prodBtn} onClick={(e)=>handleAddToCart(e,product._id)}>Add to cart</button>
                  <Link className={styles.prodLink} to={`/home/products/${product._id}`}>Details</Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
            <p className={styles.foottext}>Copyright@2021</p>
        </div>
    </div>
  );
};
export default Userhome;

