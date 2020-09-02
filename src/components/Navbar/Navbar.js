import React from "react";
// import NavLinks from '../NavLinks/NavLinks';
// import Button from '../Button/Button';
// import logo from "../assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
      <nav className={styles.container}>
          <div>
            <h1>The Shoppies</h1>
          </div>
      </nav>
    );
};

export default Navbar;
