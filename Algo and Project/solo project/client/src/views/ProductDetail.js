import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import styles from './main_home_admin_view.module.css';
const ProductDetail = (pros) => {
  const {product_id} = pros;
  const [product, setProduct] = useState();
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [comment, setComment] = useState("");
  const [commentSubmit, setCommentSubmit] = useState(false);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [clickadd, setClickadd] = useState(false);
  useEffect(() => {
    async function getData() {
      setComment("");
      try {
        const response = await axios.get(`http://localhost:8000/api/products/detail/${product_id}`, {withCredentials: true,}
        );
        console.log(response);
        setProduct(response.data);
        setLoaded(true);
      } catch (error) {
        console.log(error);
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

    getUser();
    getData();
    getCart();
  }, [commentSubmit, clickadd]);

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
  
  const handleAddToCart = async(product_id)=>{
    //e.preventDefault();
    try{
        const response = await axios.put(`http://localhost:8000/api/cart/addtocart/${product_id}`, user, { withCredentials: true } );
        console.log(response);
        setUser({...response.data});
        setClickadd(!clickadd);
    } catch(error){
        console.log(error);
    }
  }

  const handleLogout = () => {
    axios
      .post("http://localhost:8000/api/logout")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    
    navigate("/")
  };

  const handleSubmitComment = async (e, product_id) => {
    e.preventDefault();
    const newComment = {
      text: comment
    };
    try {
      const response = await axios.post(
        `http://localhost:8000/api/products/detail/${product_id}/comment`,
        newComment,
        { withCredentials: true }
      );
      console.log(response);
      setCommentSubmit(!commentSubmit);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <div className={styles.header}>
            <h1>ShoppingOpedia</h1>
            <div className={styles.navbar}>
                <Link className={styles.navlink} to={"/home"}>Home</Link>
                <Link className={styles.navlink} to={"/home/cart"}>Shopping Cart {}</Link>
                <em className={styles.cartTotal}>{total}</em>
                <Link className={styles.navlink} to={"/home/admin"}>Admin</Link>
                <Link className={styles.navlink} to={"/home/order"}>Orders</Link>
                <button className={styles.navbtn} onClick={() => handleLogout()}>Logout</button>
                <span> Hello {user.userName}</span>
            </div>
        </div>
      { loaded && (
        <div>
            <div className={styles.productIntro}>
                <div className={styles.productImg}>
                  <h2 className={styles.prodDetailTitle}>{product.title}</h2>
                  <img className={styles.prodDetailImg} src={product.img_url} alt="product image"></img>
                </div>
                <div className={styles.productDetail}>
                    <p>Add by: {product.user_id.userName}</p>
                    <p>Price $: {product.price}</p>
                    <p>Category: {product.category}</p>
                    <p>{product.description}</p>
                    <button className={styles.navbtn} onClick={()=>handleAddToCart(product._id)}>Add to cart</button>
                </div>
            </div>
            <hr/>
            <h2 className={styles.commentTitle}>Comments</h2>
            <div className={styles.commentPart}>
              <div className={styles.commentSection}>
                {product.comments &&
                  product.comments.map((comment, index) => (
                    <div className={styles.comment} key={index}>
                      <p className={styles.commentName}>
                        {comment.user_id.userName}{" "} commented @{comment.createdAt.toString(0,12)}: 
                      </p>
                      <p className={styles.commentText}>{comment.text}</p>
                    </div>
                  ))}
              </div>
              <div className={styles.commentForm}>
                <form onSubmit={(e) => handleSubmitComment(e, product._id)}>
                  <h5>Add Commet</h5>
                  <textarea cols="30" rows="8" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                  <div>
                    <button className={styles.navbtn} type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
        )}
        <div className={styles.footer}>
          <p className={styles.foottext}>Copyright@2021</p>
        </div>
    </div>
  );
};
export default ProductDetail;
