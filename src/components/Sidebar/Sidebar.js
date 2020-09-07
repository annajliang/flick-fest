import React from "react";
import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";

const Sidebar = ({ children, isSidebarOpened, toggleSidebar }) => {
  return (
    <div
      className={`${styles.slidingSidebar} ${
        isSidebarOpened ? styles.show : styles.hide
      }`}
    >
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

Sidebar.propTypes = {
  children: PropTypes.object.isRequired,
  isSidebarOpened: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
