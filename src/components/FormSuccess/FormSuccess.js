import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IconContext } from "react-icons";

import styles from './FormSuccess.module.css';

const FormSuccess = () => {
  return (
    <IconContext.Provider value={{ size: "4em" , color: "#644ce4" }}>
      <div className={styles.success}>
        <HiCheckCircle />
      </div>
    </IconContext.Provider>
  );
};

export default FormSuccess;
