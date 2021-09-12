import axios from "axios";
import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import styles from './regist_login_view.module.css';
const Login = () => {
  // declare state vars
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  //const [successMsg, setSuccessMsg] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    //setSuccessMsg("");
    const postData = { userName:userName, password:password };
    axios
      .post("http://localhost:8000/api/login", postData, {
        withCredentials: true,
      } )
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((err) => {
        setErr(err.response.data.err);
        //console.log(err);
      });
  };
  
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <label>Username: </label>
          <input name="userName" type="text" onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className={styles.input}>
          <label>Password: </label>
          <input name="password" type="text" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className={styles.btn} type="submit">Login</button>
        <Link className={styles.link} to={"/"}>Cancel</Link>
      </form>
    </div>
  );
};

export default Login;
