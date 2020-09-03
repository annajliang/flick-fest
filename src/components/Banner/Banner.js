import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
      <div className={styles.container}>
        <p>Congrats! You have nominated 5 films! View your nominees list <a href="#">here.</a></p>
        <span role="img" aria-label="confetti" className={styles.emoji}> 🎉
        </span>
      </div>
    );
}

export default Banner;