import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from '../components/ProductForm';
import { Link, navigate } from "@reach/router";
import styles from './main_home_admin_view.module.css'
const EditProduct = (props) => {
  const {product_id} = props;  
  const [errors, setErrors] = useState([]);
  const [product, setProduct] = useState({});
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/detail/${product_id}`, {withCredentials: true})
        .then(res => {
            setProduct({...res.data});
            setLoaded(true);
        })
        .catch(error =>{
            console.log(error);
        })
        
    axios.get("http://localhost:8000/api/authenuser", {withCredentials: true})
    .then(response=>{
        console.log(response);
        setUser({...response.data});
    }).catch(error=>{
        console.log(error.response);
    })

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

      getCart();
  }, [])

  useEffect(()=>{
    console.log(user);
    console.log(product);
    if(user){
      const total = items.reduce((total, item)=>{
        const updatedTotal = total + item.quantity;
          return updatedTotal;
      }, 0);
      setTotal(total);
      console.log(total);
    }

  }, [user, product, items])

  const updateProd = (prod) => {
    axios.put(`http://localhost:8000/api/products/detail/${product_id}`, prod, {withCredentials: true})
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
            <h1>Edit Product</h1>
            <div className={styles.navbar}>
                <Link className={styles.navlink} to={"/home"}>Home</Link>
                <Link className={styles.navlink} to={"/home/cart"}>Shopping Cart</Link>
                <em className={styles.cartTotal}>{total}</em>
                <Link className={styles.navlink} to={"/home/admin"}>Admin</Link>
                <Link className={styles.navlink} to={"/home/order"}>Orders</Link>
                <button className={styles.navbtn} onClick={() => handleLogout()}>Logout</button>
                <span> Hello {user.userName}</span>
            </div>
        </div>
        <div className={styles.prodDetail}>
            <div>
                <img className={styles.prodDetailImg} src={product.img_url} alt="product image" />
            </div>
            {
                loaded && (
                    <div className={styles.prodDetailForm}>
                        <ProductForm initTitle={product.title} initImg_url={product.img_url} 
                        initPrice={product.price} initCategory={product.category} 
                        initDescription={product.description} onSubmitProp={updateProd} errors={errors} />
                    </div>
                )
            }
        </div>
        <div className={styles.footer}>
            <p className={styles.foottext}>Copyright@2021</p>
        </div>
    </div>
  );
};

export default EditProduct;
