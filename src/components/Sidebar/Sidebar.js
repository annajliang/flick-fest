import React from "react";
// import NominatedMovies from "./components/Results/NominatedMovies";
import CloseBanner from "../Banner/CloseBanner";
import styles from "./Sidebar.module.css";

const Sidebar = ({ children, isSidebarOpened }) => {
  return (
    <div className={`${styles.slidingSidebar} ${isSidebarOpened ? styles.show : styles.hide}`}>
      {children}
      <span
      className={styles.closeSidebar}
      tabIndex="0"
      role="button"
      aria-label="Close"
      // onClick={closeBanner}
    ></span>
    </div>
  );
};

export default Sidebar;
