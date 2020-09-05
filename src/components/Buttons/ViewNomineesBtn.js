import React from "react";
import styles from "./ViewNomineesBtn.module.css";
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

export default ViewNomineesBtn;
