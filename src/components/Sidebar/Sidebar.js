import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ children, isSidebarOpened, toggleSidebar }) => {
  return (
    <div className={`${styles.slidingSidebar} ${isSidebarOpened ? styles.show : styles.hide}`}>
      {children}
      <span
      className={styles.closeSidebar}
      tabIndex="0"
      role="button"
      aria-label="Close"
      onClick={toggleSidebar}
    ></span>
    </div>
  );
};

export default Sidebar;
