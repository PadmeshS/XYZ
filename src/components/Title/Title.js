import React from "react";

import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={styles.titleSection}>
      <h2 className={styles.text}>{props.text}</h2>
      <p className={styles.subText}>{props.subtext}</p>
    </div>
  );
};

export default Title;
