import React from "react";
// import NominatedMovies from "./components/Results/NominatedMovies";
import styles from "./Sidebar.module.css";

const Sidebar = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Sidebar;
