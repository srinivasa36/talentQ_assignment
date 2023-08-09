import React, { useState } from "react";
import Card from "../card/card";
import styles from "./sectionItem.module.css";

const SectionItem = ({ section, cards }) => {
  const [showAllCards, setShowAllCards] = useState(false);
  const maxVisibleCards = 3;

  return (
    <div className={styles.section}>
      <h2 class>{section.title}</h2>
      <div className={styles["card_item"]}>
        {cards
          .slice(0, showAllCards ? cards.length : maxVisibleCards)
          .map((card) => (
            <Card key={card.id} card={card} />
          ))}
      </div>
      {!showAllCards && cards.length > maxVisibleCards && (
        <div className={styles["see_more_btn_wrapper"]}>
          <button
            onClick={() => setShowAllCards(true)}
            className={styles["see_more_btn"]}
          >
            See More +
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionItem;
