import React from "react";
import ViewNomineesBtn from "../Buttons/ViewNomineesBtn";
import styles from "./Navbar.module.css";

const Navbar = ({ toggleSidebar, nominatedMovies }) => {
  return (
    <nav className={styles.container}>
      <div className="wrapper">
        <ViewNomineesBtn
          toggleSidebar={toggleSidebar}
          nominatedMovies={nominatedMovies}
        />
      </div>
    </nav>
  );
};

export default Navbar;
