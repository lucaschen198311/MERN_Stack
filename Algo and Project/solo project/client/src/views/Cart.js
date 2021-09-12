import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, navigate} from "@reach/router";
import styles from './cart_view.module.css';
const Cart = () => {
    const [totalprice, setTotalprice] = useState(0);
    const [user, setUser] = useState({});
    const [items, setItems] = useState([]);
    const [click, setClick] = useState(true);
    useEffect(() => {
        async function getUser() {
          try{
            const response = await axios.get("http://localhost:8000/api/authenuser", {withCredentials: true})
            setUser({...response.data});
            console.log(user);
          }catch(error){
            console.log(error);
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
      }, [click]);

      useEffect(() => {
        const sum = items.reduce((sum, item)=>{
          const updatedSum = sum + item.quantity*item.product_id.price;
            return updatedSum;
        }, 0);
        setTotalprice(sum);
        console.log(totalprice);
      },[user, items])

    const handleLogout = () => {
        axios
          .post("http://localhost:8000/api/logout")
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
        
        navigate("/")
      };

      const handleAddToCart = async(product_id)=>{
        //e.preventDefault();
        try{
            const response = await axios.put(`http://localhost:8000/api/cart/addtocart/${product_id}`, user, {withCredentials: true});
            console.log(response);
            setUser({...response.data});
            setClick(!click);
        } catch(error){
            console.log(error);
        }
      }

    const handleQuantityDecrease = async(product_id) =>{
          try {
            const response = await axios.put(`http://localhost:8000/api/cart/decreasefromcart/${product_id}`, user, {withCredentials: true});
            console.log(response);
            setUser({...response.data});
            setClick(!click);
          } catch (error) {
            console.log(error.response);
          }
    } 
    const handleItemRemove = async(product_id) =>{
          try {
            const response = await axios.put(`http://localhost:8000/api/cart/removefromcart/${product_id}`, user, {withCredentials: true});
            console.log(response);
            setUser({...response.data});
            setClick(!click);
          } catch (error) {
            console.log(error.response);
          }
    }    
    const handleOrderSubmit = async() =>{
      const orderConfirm = window.confirm(`Are you sure you want to submit order?`);
      if(orderConfirm){
          try{
            let popUser = {...user};
            popUser.cart.items = items;
            console.log(popUser);
            const res = await axios.post(`http://localhost:8000/api/orders/new`, popUser, {withCredentials: true});
            console.log(res);
          }catch(error){
            console.log(error.response)
          }

          try {
            const response = await axios.put(`http://localhost:8000/api/cart/order`, user, {withCredentials: true});
            console.log(response);
            setUser({...response.data});
            //navigate("/home");
            navigate("/home/order")
          } catch (error) {
            console.log(error.response);
          }
      }
    } 

    const handleCancel = ()=>{
      navigate("/home");
    }

    return (
        <div>
          <div className={styles.header}>
              <h1>ShoppingOpedia</h1>
              <div className={styles.navbar}>
                <Link className={styles.navlink} to={"/home"}>Home</Link>
                <Link className={styles.navlink} to={"/home/admin"}>Admin</Link>
                <Link className={styles.navlink} to={"/home/order"}>Orders</Link>
                <button className={styles.navbtn} onClick={() => handleLogout()}>Logout</button>
                <span>Hello {user.userName}</span>
              </div>
          </div>
          <h2>Shopping cart of {user.userName}</h2>
          <div className={styles.cartList}>
              <table>
                <thead>
                  <tr>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Unit Price ($)</th>
                      <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    items && 
                    items.map((item, index)=>{
                      const pid = item.product_id._id;
                      const prodLink = `/home/products/${item.product_id._id}`;
                      return(
                      <tr key={index}>
                        <td><a href={prodLink}>{item.product_id.title}</a></td>
                        <td>{item.quantity}</td>
                        <td>{item.product_id.price}</td>
                        <td>
                          <button className={styles.actionBtn} onClick={()=>handleAddToCart(pid)}>+</button>  |  
                          <button className={styles.actionBtn} onClick={()=>handleQuantityDecrease(pid)}>-</button>  |  
                          <button className={styles.actionBtn} onClick={()=>handleItemRemove(pid)}>remove</button>
                        </td>
                      </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </div>
          <div className={styles.cartFooter}>
              <p>Totoal Price $: <span>{totalprice.toFixed(2)}</span></p>
              <div>
                <button className={styles.orderBtn} onClick={()=>handleOrderSubmit()}>Order</button>
                <button className={styles.cancelBtn} onClick={()=>handleCancel()}>Cancel</button>
              </div>
          </div>
          <div className={styles.footer}>
            <p className={styles.foottext}>Copyright@2021</p>
          </div>
        </div>
      );
};

export default Cart;