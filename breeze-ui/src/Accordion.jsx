import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import '../styles/Accordion.css'

const Accordion = ({ items, multiple = false }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleItem = (index) => {
    if (multiple) {
      setActiveIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setActiveIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleItem(index)}
          >
            <span>{item.title}</span>
            {activeIndexes.includes(index) ? (
              <FiChevronUp className="accordion-icon" />
            ) : (
              <FiChevronDown className="accordion-icon" />
            )}
          </button>
          <div
            className={`accordion-content ${
              activeIndexes.includes(index) ? "active" : ""
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
