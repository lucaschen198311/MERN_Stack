import React, { useState } from "react";
import styles from './prodductform.module.css';
import { Link } from "@reach/router";
const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const {initTitle, initImg_url, initPrice, initCategory, initDescription,onSubmitProp, errors} = props;
    const [title, setTitle] = useState(initTitle);
    const [img_url, setImg_url] = useState(initImg_url);
    const [price, setPrice] = useState(initPrice);
    const [category, setCategory] = useState(initCategory);
    const [description, setDescription] = useState(initDescription);
    const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProp({title, img_url, price, category, description});
    console.log(errors, errors.length);
  };
    return (
        <form className={styles.prodFrom} onSubmit={handleSubmit}>
            <div className={styles.input}>
                <section><label>Product Title: </label></section>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                { errors.title ? <p className={styles.errMsg}>{errors.title.message}</p>: null}
            </div>
            <div className={styles.input}>
                <section><label>Image URL: </label></section>
                <input type="text" value={img_url} onChange={(e) => setImg_url(e.target.value)}/>
                { errors.img_url ? <p className={styles.errMsg}>{errors.img_url.message}</p>: null}
            </div>
            <div className={styles.input}>
                <section><label>Price $: </label></section>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                { errors.price ? <p className={styles.errMsg}>{errors.price.message}</p>: null}
            </div>
            <div className={styles.input}>
                <section><label>Category: </label></section>
                <select className={styles.select} name="category" value={category} onChange={e=>setCategory(e.target.value)}>
                    <option value="not known">not known</option>
                    <option value="food">food</option>
                    <option value="digital">digital</option>
                    <option value="book">book</option>
                    <option value="clothe">clothe</option>
                    <option value="furniture">furniture</option>
                    <option value="electronic">electronic</option>
                    <option value="service">service</option>
                </select>
            </div>
            <div className={styles.input}>
                <section><label>Description: </label></section>
                <textarea cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                { errors.description ? <p className={styles.errMsg}>{errors.description.message}</p>: null}
            </div>
            {
                initTitle?
                <button className={styles.btn} type="submit">Update</button> :
                <button className={styles.btn} type="submit">Add</button>
            }
            <Link className={styles.link} to={"/home/admin"}>Cancel</Link>
        </form>
    )
}

export default ProductForm;