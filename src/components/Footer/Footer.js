import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className="wrapper">
        <p>
          Code and design by
          <a href="https://annaliang.dev/"> Anna Liang</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
