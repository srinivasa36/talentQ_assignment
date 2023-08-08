import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  return (
    <div className={styles.card}>
      <h3>{card.card_title}</h3>
      <p>Data: {card.data_value}</p>
      {card.button && <button>{card.button_name}</button>}
      {/* Display other card content based on data_type */}
    </div>
  );
};

export default Card;
