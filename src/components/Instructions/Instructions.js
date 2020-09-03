import React from "react";
import styles from "./Instructions.module.css";

const Instructions = () => {
  return (
    <ol className={styles.instructionsList}>
      <li className={`${styles.instructionsItem} ${styles.stepOne} ${styles.verticalDivider}`}>
        <span>1</span>
        <p>Search for a movie title.</p>
      </li>
      <li className={`${styles.instructionsItem} ${styles.verticalDivider}`}>
        <span>2</span>
        <p>Browse the search results and click the nominate button to
        nominate your faves (you may pick a max of 5 movies).</p>
      </li>
      <li className={`${styles.instructionsItem} ${styles.verticalDivider}`}>
        <span>3</span>
        <p>Change your mind? Click the remove button to remove a movie from your
        nominees list.</p>
      </li>
      <li className={styles.instructionsItem}>
        <span>4</span>
        <p>Once you're satisfied with your nominees list, click submit to cast your votes!</p>
      </li>
    </ol>
  );
};

export default Instructions;
