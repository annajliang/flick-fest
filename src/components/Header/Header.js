import React from "react";
import PropTypes from "prop-types";
import wavesUnderline from "../../assets/wavesUnderline .svg";
import HeaderDivider from "./HeaderDivider";
import styles from "./Header.module.css";

const Header = ({ scrollTo }) => {
  return (
    <header>
      <div className={`${styles.container}`}>
        <div className="wrapper">
          <div className={styles.title}>
            <h1>Flick Fest</h1>
            <img src={wavesUnderline} alt="squiggly text underline" className={styles.divider} />
            <div className={styles.introText}>
              <p className={styles.textMargin}>
                Welcome to Flick Fest's 1st ever virtual movie awards!
              </p>
              <p className={styles.textMargin}>
                We want to know which movies are the all time fan favorites so we'll need your help! Tell us what your most beloved films are by nominating your top 5
                favourites.
              </p>
              <p className={styles.textMargin}>
                Polls close on December 8 at 9 a.m. EST. so get your votes in ASAP!
              </p>
              <button className={styles.voteNowBtn} onClick={scrollTo}>
                Vote Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <HeaderDivider />
    </header>
  );
};

Header.propTypes = {
  scrollTo: PropTypes.func.isRequired,
};

export default Header;
