import React from "react";
import PropTypes from "prop-types";
import divider from "../../assets/headerDivider.svg";
import styles from "./Header.module.css";

const Header = ({ scrollTo }) => {
  return (
    <header>
      <div className={`${styles.container}`}>
        {/* <Navbar /> */}
        <div className="wrapper">
          <div className={styles.title}>
            <h1>The Shoppies</h1>
            <img src={divider} alt="" className={styles.divider} />
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3fd0d4"
          fill-opacity="1"
          d="M0,256L48,250.7C96,245,192,235,288,192C384,149,480,75,576,80C672,85,768,171,864,170.7C960,171,1056,85,1152,42.7C1248,0,1344,0,1392,0L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </header>
  );
};

Header.propTypes = {
  scrollTo: PropTypes.func.isRequired,
};

export default Header;
