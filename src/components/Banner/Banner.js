import React from "react";
import CloseBanner from "./CloseBanner";
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
      <CloseBanner closeBanner={closeBanner} />
    </div>
  );
};

export default Banner;
