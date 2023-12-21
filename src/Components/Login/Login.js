import React from "react";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <section className={classes.login}>
      <div className={classes.image}>
        <img
          src="Images/LoginImage1.png"
          alt="Footwear"
          className={classes.img}
        />
      </div>
      <div className={classes.logindetails}>
        <ul>
          <li className={classes.heading}>
            <div>Welcome to abc Footwear</div>
            <span>Smile that you carry with your shoes.</span>
          </li>
          <li className={classes.input}>
            <h1>Login</h1>
            <input type="text" placeholder="Mobile Number" />
            <br />
            <br />
            <input type="password" placeholder="Password" />
          </li>
          <button className={classes.button} type="submit">
            Login
          </button>
          <li className={classes.forget}>
            <a href="/">Forget password?</a>
            <br />
            <span className={classes.account}>
              You don't have an account? <a href="/">create here</a>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Login;
