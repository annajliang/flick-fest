import React from "react";
import verticalDivider from "../../assets/verticalDivider.png";
import styles from "./Instructions.module.css";

const Instructions = () => {
  return (
    <ol className={styles.instructionsList}>
      <li className={`${styles.instructionsItem} ${styles.stepOne}`}>
        <span>1</span>
        <p>Search for a movie title.</p>
        <img
          src={verticalDivider}
          className={styles.verticalDivider}
          alt="vertical text divider"
        />
      </li>
      <li className={`${styles.instructionsItem}`}>
        <span>2</span>
        <p>
          Click nominate to add your movies (you may pick a max of 5 movies).
        </p>
        <img
          src={verticalDivider}
          className={styles.verticalDivider}
          alt="vertical divider"
        />
      </li>
      <li className={`${styles.instructionsItem}`}>
        <span>3</span>
        <p>Change your mind? Click the film icon and click remove to edit your list.</p>
        <img
          src={verticalDivider}
          className={styles.verticalDivider}
          alt="vertical divider"
        />
      </li>
      <li className={styles.instructionsItem}>
        <span>4</span>
        <p>Once you're satisfied with your nominees list, you're done!</p>
      </li>
    </ol>
  );
};

export default Instructions;
