import React from "react";
import styles from "./ViewNomineesBtn.module.css";

const ViewNomineesBtn = ({ toggleSidebar }) => {
  return (
    <div className={styles.container}>
      <button onClick={toggleSidebar} className={styles.viewNominees}>Your Nominees</button>
    </div>
  );
};

export default ViewNomineesBtn;
