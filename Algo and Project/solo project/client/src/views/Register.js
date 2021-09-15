import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import styles from './regist_login_view.module.css';
const Register = () => {
  // Define state vars
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  //const [backendErr, setBackendErr] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      email,
      firstName,
      lastName,
      userName,
      password,
      confirmPassword,
    };
    try {
      await axios.post("http://localhost:8000/api/register", postData);
      navigate("/login");
    } catch (err) {
      if(err.response.data.error){
        setErrors({
          firstName:null,
          lastName: null,
          userName: {message:err.response.data.error},
          email: {message:err.response.data.error},
          password: null,
          confirmPassword:null
        })
      }else{
        setErrors(err.response.data.errors);
      }
    }
  };
  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <label>First Name: </label>
          <input name="firstName" type="text" onChange={(e) => setFirstName(e.target.value)} />
          { errors.firstName && <p className={styles.warning}>{errors.firstName.message}</p>}
        </div>
        <div className={styles.input}>
          <label>Last Name: </label>
          <input name="lastName" type="text" onChange={(e) => setLastName(e.target.value)} />
          { errors.lastName && <p className={styles.warning}>{errors.lastName.message}</p>}
        </div>
        <div className={styles.input}>
          <label>Username: </label>
          <input name="userName" type="text" onChange={(e) => setUserName(e.target.value)} />
          { errors.userName  && <p className={styles.warning}>{errors.userName.message}</p>}
        </div>
        <div className={styles.input}>
          <label>Email: </label>
          <input name="email" type="text" onChange={(e) => setEmail(e.target.value)} />
          { errors.email && <p className={styles.warning}>{errors.email.message}</p>}
        </div>
        <div className={styles.input}>
          <label>Password: </label>
          <input name="password" type="text" onChange={(e) => setPassword(e.target.value)} />
          { errors.password  && <p className={styles.warning}>{errors.password.message}</p>}
        </div>
        <div className={styles.input}>
          <label>Confirm Password: </label>
          <input name="confirmPassword" type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
          { errors.confirmPassword  && <p className={styles.warning}>{errors.confirmPassword.message}</p>}
        </div>
        <button className={styles.btn} type="submit">Register</button>
        <Link className={styles.link} to={"/"}>Cancel</Link>
      </form>
    </div>
  );
};

export default Register;