import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, navigate} from "@reach/router";
import styles from './order.module.css';

const Order = () =>{
    const [user, setUser] = useState({});
    const [total, setTotal] = useState(0);
    const [orderList, setOrderList] = useState([]);
    const [items, setItems] = useState([]);
    const [click, setClick] = useState(false);
    useEffect(() => {
        async function getUser() {
          try{
            const response = await axios.get("http://localhost:8000/api/authenuser", {withCredentials: true})
            setUser({...response.data});
          }catch(error){
            console.log(error);
          }
        }
        
        async function getCart() {
            try {
              const response = await axios.get("http://localhost:8000/api/cart", {withCredentials: true});
              console.log(response.data.items);
              setItems(response.data.items);
            } catch (error) {
              console.log(error.response);
            }
        }
        
        async function getOrders() {
            try {
              const response = await axios.get("http://localhost:8000/api/orders", {withCredentials: true});
              console.log(response.data);
              setOrderList(response.data);
            } catch (error) {
              console.log(error.response);
            }
        }
          
        getUser();
        getCart();
        getOrders()
      }, [click]);

      useEffect(() => {
        const sum = items.reduce((sum, item)=>{
          const updatedSum = sum + item.quantity;
            return updatedSum;
        }, 0);
        setTotal(sum);
        console.log(total);
        console.log(user);
        console.log(items);
        console.log(orderList)
      },[user, items, orderList])

    const handleLogout = () => {
        axios
          .post("http://localhost:8000/api/logout")
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
        
        navigate("/")
    };

    const recallOrder = (order_id) =>{
      const recallConfirm = window.confirm(`Are you sure you want to cancel this order? Please contact payment center after submit for next steps.`);
      if(recallConfirm){
        axios.delete(`http://localhost:8000/api/orders/${order_id}`, {withCredentials: true})
        .then(response=> {
            console.log(response);
            setClick(!click);
        })
        .catch(error => console.log(error))
      }
    }

    return(
        <div>
            <div className={styles.header}>
                <h1>ShoppingOpedia</h1>
                <div className={styles.navbar}>
                    <Link className={styles.navlink} to={"/home"}>Home</Link>
                    <Link className={styles.navlink} to={"/home/cart"}>Shopping Cart</Link>
                    <em className={styles.cartTotal}>{total}</em>
                    <Link className={styles.navlink} to={"/home/admin"}>Admin</Link>
                    <button className={styles.navbtn} onClick={() => handleLogout()}>Logout</button>
                    <span> Hello {user.userName}</span>
                </div>
            </div>
            <h2>Order Histoty of {user.userName}</h2>
            <div className={styles.orderList}>
                {
                    orderList &&
                    orderList.map((order, index) =>{
                        const totalPrice = order.products.reduce((totalPrice, item)=>{
                            const updatedTotal = totalPrice + item.quantity*item.product.price;
                              return updatedTotal;
                          }, 0);
                        return(
                            <div className={styles.orderTableList} key={index}>
                                <div className={styles.orderTableHeader}>
                                    <h3>Order @{order.createdAt.toString(0,12)}  with total Price$: {totalPrice.toFixed(2)}</h3>
                                    <button className={styles.recallBtn} onClick={()=>recallOrder(order._id)}>Recall Order</button>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Unit Price($)</th>
                                            <th>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.products &&
                                            order.products.map((product, index)=>{
                                               const prodLink = `/home/products/${product.product._id}` 
                                               return (
                                                <tr key={index}>
                                                    <td><a href={prodLink}>{product.product.title}</a></td>
                                                    <td>{product.product.price}</td>
                                                    <td>{product.quantity}</td>
                                                </tr>
                                            )
                                           }
                                          )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )
                      }
                    )
                }
            </div>
            <div className={styles.footer}>
                <p className={styles.foottext}>Copyright@2021</p>
            </div>
        </div>
    )

}

export default Order;