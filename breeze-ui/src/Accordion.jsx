import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

/**
 * Accordion component that allows expanding and collapsing of content sections.
 * It supports both single and multiple open sections.
 *
 * @param {Object} props - The properties for the Accordion component.
 * @param {Array} props.items - An array of items, where each item contains a `title` and `content`.
 * @param {boolean} [props.multiple=false] - If true, allows multiple sections to be open at the same time. Default is false (only one section can be open at a time).
 * 
 * @returns {JSX.Element} The rendered Accordion component.
 */
const Accordion = ({ items, multiple = false }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  /**
   * Toggles the visibility of an accordion item.
   * 
   * @param {number} index - The index of the item to toggle.
   */
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

  // Styles object
  const styles = {
    accordion: {
      width: '100%',
      margin: '0 auto'
    },
    item: {
      borderBottom: '1px solid #e2e8f0',
      marginBottom: '12px',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    },
    header: {
      width: '100%',
      padding: '16px 0',
      border: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 500,
      background: 'transparent'
    },
    icon: {
      fontSize: '18px',
      transition: 'transform 0.3s ease'
    },
    content: {
      maxHeight: 0,
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    },
    activeContent: {
      maxHeight: '500px',
      padding: '0 20px 20px 20px'
    }
  };

  return (
    <div style={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} style={styles.item}>
          <button
            style={styles.header}
            onClick={() => toggleItem(index)}
          >
            <span>{item.title}</span>
            {activeIndexes.includes(index) ? (
              <FiChevronUp style={styles.icon} />
            ) : (
              <FiChevronDown style={styles.icon} />
            )}
          </button>
          <div
            style={{
              ...styles.content,
              ...(activeIndexes.includes(index) ? styles.activeContent : {})
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
