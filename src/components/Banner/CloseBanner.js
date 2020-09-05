import React from "react";
import styles from "./CloseBanner.module.css";

const CloseBanner = ({ closeBanner }) => {
  return (
    <span
      className={styles.closeBanner}
      tabIndex="0"
      role="button"
      aria-label="Close"
      onClick={closeBanner}
    ></span>
  );
};

export default CloseBanner;
