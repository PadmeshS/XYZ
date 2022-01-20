import React from "react";

import styles from "../InputForm.module.css";

const UserDetails = (props) => {
  return (
    <section className={styles["form-control"]}>
        <div className={styles["form-control__input"]}>
          <label>Full Name</label>
        </div>
        <div className={`${styles["form-control__input"]} ${!props.isFNValid && styles.invalid}`}>
          <input
            type="text"
            value={props.fullName}
            onChange={props.onFullNameChange}
            placeholder="Steve Jobs"
          />
        </div>
        <div className={styles["form-control__input"]}>
          <label>Display Name</label>
        </div>
        <div className={`${styles["form-control__input"]} ${!props.isDNValid && styles.invalid}`}>
          <input
            type="text"
            value={props.displayName}
            onChange={props.onDisplayNameChange}
            placeholder="Steve "
          />
        </div>
    </section>
  );
};

export default UserDetails;
