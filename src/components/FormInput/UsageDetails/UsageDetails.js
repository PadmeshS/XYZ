import React, {useState} from "react";
import OptionCard from "../OptionCard/OptionCard";
import styles from "./UsageDetails.module.css";

const UsageDetails = (props) => {

    const [activeCard, setActiveCard] = useState(1);

    const cardClickHandler = (cardID) => {
        setActiveCard(cardID);
        props.onOptionChange(cardID);
    };
  return (
    <section className={styles.usageDetailsSection}>
      <OptionCard
        cardType={1}
        selected={activeCard === 1}
        title="For myself"
        onCardClick={() => cardClickHandler(1)}
        description="Write better. Think more clearly. Stay organized"
      />
      <OptionCard
        cardType={2}
        selected={activeCard === 2}
        title="With my team"
        onCardClick={() => cardClickHandler(2)}
        description="Wikis, docs, tasks & projects, all in one place"
      />
    </section>
  );
};

export default UsageDetails;
