import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  return (
    <div className={styles.card}>
      <h3>{card.card_title}</h3>
      <p>Data: {card.data_value}</p>
      {card.data && <div>{card.data_type}</div>}
      {card.button && (
        <button className={styles["card_btn"]}>{card.button_name}</button>
      )}
      {card.link && (
        <button className={styles.link_btn}>{card.link_name}</button>
      )}
    </div>
  );
};

export default Card;
