import React from "react";
import styles from "./ViewNomineesBtn.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const ViewNomineesBtn = ({ toggleSidebar, nominatedMovies }) => {
  return (
    <div className={styles.container}>
      <button onClick={toggleSidebar} className={styles.viewNominees}>
        <FontAwesomeIcon icon={faFilm} className={styles.filmIcon} />
        <span className={styles.nomineeNotification}>
          {nominatedMovies.length}
        </span>
      </button>
    </div>
  );
};

ViewNomineesBtn.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  nominatedMovies: PropTypes.array.isRequired,
};

export default ViewNomineesBtn;
