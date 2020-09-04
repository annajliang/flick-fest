import React from "react";
// import NominatedMovies from "./components/Results/NominatedMovies";
import styles from "./Sidebar.module.css";

const Sidebar = ({ children, isSidebarOpened }) => {
  return (
    <div className={`${styles.slidingSidebar} ${isSidebarOpened ? styles.show : styles.hide}`}>
      {children}
    </div>
  );
};

export default Sidebar;
