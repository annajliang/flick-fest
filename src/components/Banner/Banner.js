import React from "react";
import styles from "./Banner.module.css";

const Banner = ({ closeBanner }) => {
  return (
    <div className={styles.container}>
      <p>
        Congrats! You have nominated 5 films! View your nominees list{" "}
        <a href="#">here.</a>
      </p>
      <span role="img" aria-label="confetti" className={styles.emoji}>
        {" "}
        🎉
      </span>
      <span
        className={styles.closeBanner}
        tabIndex="0"
        role="button"
        aria-label="Close"
        onClick={closeBanner}
      ></span>
    </div>
  );
};

export default Banner;
