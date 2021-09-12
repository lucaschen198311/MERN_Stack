import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "@reach/router";
import styles from './main_home_admin_view.module.css';
const Main = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
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
    getData();
  }, [category]);

  return (
    <div>
        <div className={styles.header}>
            <h1>ShoppingOpedia</h1>
            <div className={styles.navbar}>
                <Link className={styles.navlink} to={"/login"}>Login</Link>
                <Link className={styles.navlink} to={"/register"}>Register</Link>
            </div>
        </div>
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
            <div className={styles.mainCard} key={index}>
              <h3>{product.title}</h3>
              <img className={styles.prodImg} src={product.img_url} alt="product img" />
              <p className={styles.prodPrice}>Price $: {product.price}</p>
              <p p className={styles.prodDescription}>{product.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
            <Link className={styles.footlink} to={"/login"}>Login</Link>
            <Link className={styles.footlink} to={"/register"}>Register</Link>
            <p className={styles.foottext}>Copyright@2021</p>
        </div>
    </div>
  );
};
export default Main;
