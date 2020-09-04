import React from "react";
import styles from "./ViewNomineesBtn.module.css";

const ViewNomineesBtn = () => {
  return (
    <div className={styles.container}>
      <button className={styles.viewNominees}>Your Nominees</button>
    </div>
  );
};

export default ViewNomineesBtn;
