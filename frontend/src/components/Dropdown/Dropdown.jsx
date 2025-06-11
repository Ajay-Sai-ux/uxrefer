"use client";
import { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ label = "Select", options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect && onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
        {selected ? selected.label : label}
        <span className={styles.arrow}>▼</span>
      </button>

      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={styles.option}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
