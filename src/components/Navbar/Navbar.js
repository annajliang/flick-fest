import React from "react";
import ViewNomineesBtn from "../Buttons/ViewNomineesBtn";
import PropTypes from "prop-types";
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

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  nominatedMovies: PropTypes.array.isRequired,
};

export default Navbar;
