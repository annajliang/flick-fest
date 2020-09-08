import React, { useState, useEffect } from "react";
import styles from "./ViewNomineesBtn.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const ViewNomineesBtn = ({ toggleSidebar, nominatedMovies }) => {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (nominatedMovies.length !== 0) {
      setIsShaking(true);
    }
  }, [nominatedMovies]);

  return (
    <div className={styles.container}>
      <button onClick={toggleSidebar} className={styles.viewNominees}>
        <FontAwesomeIcon
          icon={faFilm}
          className={styles.filmIcon}
          aria-label="view your nominations"
        />
        {/* updates notification everytime a movie is nominated */}
        <span
          className={`${styles.nomineeNotification} ${
            isShaking ? styles.shake : undefined
          }`}
          key={nominatedMovies.length}
        >
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
