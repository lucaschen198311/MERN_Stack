import React from "react";
import axios from "axios";
import styles from './paginationcomp.module.css';
import {Link} from "@reach/router";
const PaginationComponent = (props) =>{
    const {product, pageType, user, setUser, clickadd, setClickadd} = props;
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

    return(
            <div className={pageType=="Main"? styles.mainCard: styles.card} >
              <h3>{product.title}</h3>
              <img className={styles.prodImg} src={product.img_url} alt="product img" />
              <p className={styles.prodPrice}>Price $: {product.price}</p>
              <p p className={styles.prodDescription}>{product.description}</p>
              {
                pageType=="Home"?
                (
                  <div className={styles.cardBottom}>
                    <button className={styles.prodBtn} onClick={(e)=>handleAddToCart(e,product._id)}>Add to cart</button>
                    <Link className={styles.prodLink} to={`/home/products/${product._id}`}>Details</Link>
                  </div>
                ) : null
              }
            </div>
          )
}

export default PaginationComponent;