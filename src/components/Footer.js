import React from 'react'
import styles from './Footer.module.css';
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
function Footer() {
  console.log("check");
  return (
    <div>
      <div className={styles.footer}>
      <span>Copyright &copy; 2021 Tripify. All rights reserved</span>
      <ul className={styles.links}>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <ul className={styles.social__links}>
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Footer;