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
            <h1>The Shoppies</h1>
            <img src={wavesUnderline} alt="" className={styles.divider} />
            <div className={styles.introText}>
              <p className={styles.textMargin}>
                Welcome to Shopify's 1st ever virtual movie awards.
              </p>
              <p className={styles.textMargin}>
                We want to know which movies are the ultimate fan favorite films
                of all time so we'll need some help from you, the fan.
              </p>
              <p>
                Tell us what your top beloved films are by nominating your top 5
                favourte flicks!
              </p>
              <p className={styles.textMargin}>
                Once you are satisfied with your selections, click submit to
                send us your votes.
              </p>
              <p>
                This poll has unlimited voting, so you can vote as many times as
                you wish for your fave choices! We will close this poll and
                announce the results on September 8 at 9 a.m. ET. so get your
                votes in asap!
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
