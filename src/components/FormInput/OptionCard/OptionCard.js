import React from "react";

import { HiUser, HiUserGroup } from "react-icons/hi";
import { IconContext } from "react-icons";

import styles from './OptionCard.module.css';

const OptionCard = (props) => {
  return (
    <div
      className={`${styles.optionCard} ${props.selected && styles.selected}`}
      onClick={props.onCardClick}
    >
      {props.cardType === 1 && (
        <IconContext.Provider
          value={{ size: '1.5em', color: props.selected ? "#644ce4" : "#202020" }}
        >
          <div>
            <HiUser />
          </div>
        </IconContext.Provider>
      )}
      {props.cardType === 2 && (
        <IconContext.Provider
          value={{ size: '1.5em', color: props.selected ? "#644ce4" : "#202020" }}
        >
          <div>
            <HiUserGroup />
          </div>
        </IconContext.Provider>
      )}
      <div className={styles.optionDetails}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default OptionCard;
