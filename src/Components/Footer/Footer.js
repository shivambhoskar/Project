import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.f1}>
        <h3>SUPPORT</h3>
        <li>
          <a href="/">Contact Us</a>
        </li>
        <li>
          <a href="/">Promotion & Sale</a>
        </li>
        <li>
          <a href="/">Track Order</a>
        </li>
        <li>
          <a href="/">Privacy & Policy</a>
        </li>
        <li>
          <a href="/">Terms & Condition</a>
        </li>
        <li>
          <a href="/">Cookies Settings</a>
        </li>
      </div>

      <div className={classes.f1}>
        <ul>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/">My Account</a>
          </li>
          <li>
            <a href="/">Cancellation & Returns</a>
          </li>
          <li>
            <a href="/">Tech Glossary</a>
          </li>
          <li>
            <a href="/">Initiate Return</a>
          </li>
        </ul>
      </div>

      <div className={classes.f1}>
        <h3>About</h3>
        <li>
          <a href="/">Company</a>
        </li>
        <li>
          <a href="/">Press Center</a>
        </li>
        <li>
          <a href="/">Sastainability</a>
        </li>
        <li>
          <a href="/">Store Finder</a>
        </li>
      </div>

      <div className={classes.f1}>
        <ul>
          <li>
            <a href="/">Corporate News</a>
          </li>
          <li>
            <a href="/">Investor</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
        </ul>
      </div>
      <div className={classes.vertical}></div>
      <div>
        <h1 className={classes.follow}>Follow Us</h1>
        <ul className={classes.social}>
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <i className="ri-facebook-line"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              <i className="ri-twitter-fill"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <i className="ri-instagram-fill"></i>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com" target="blank">
              <i className="ri-pinterest-fill"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target="_blank">
              <i className="ri-youtube-fill"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
