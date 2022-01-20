import React from "react";

import styles from "../InputForm.module.css";

const WorkspaceDetails = (props) => {
  return (
    <section className={styles["form-control"]}>
        <div className={styles["form-control__input"]}>
          <label>Workspace Name</label>
        </div>
        <div className={`${styles["form-control__input"]} ${!props.isWNValid && styles.invalid}`}>
          <input
            type="text"
            value={props.wsName}
            onChange={props.onWsNameChange}
            placeholder="Eden"
          />
        </div>
        <div className={styles["form-control__input"]}>
          <label>Workspace URL <span style={{color: 'gray'}}>(optional)</span></label>
        </div>
        <div className={styles["form-control__fixed_input"]}>
            <div>www.eden.com/</div>
          <input
            type="text"
            value={props.wsURL}
            onChange={props.onWsURLChange}
            placeholder="Example"
          />
        </div>
    </section>
  );
};

export default WorkspaceDetails;
