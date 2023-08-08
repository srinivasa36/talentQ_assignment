import React from "react";
import SectionItem from "../section/sectionItem";
import sectionData from "../section/sectionData";
import cardData from "../card/cardData";

const Section = () => {
  return (
    <div className="dashboard">
      {sectionData.map((section) => (
        <SectionItem
          key={section.id}
          section={section}
          cards={cardData.filter(
            (card) => card.parent_sec_no === section.sec_no
          )}
        />
      ))}
    </div>
  );
};

export default Section;
