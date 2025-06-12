"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";
import Image from "next/image";

const Dropdown = ({ label = "Select", options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null); // ⬅️ for outside click detection

  // Detect click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect && onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
        {selected ? selected.label : label}
        <Image
          src="/chevron_down.svg"
          alt="Dropdown Arrow"
          width={24}
          height={24}
          className={styles.arrow}
        />
      </button>

      {isOpen && (
        <div className={styles.menu}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={styles.option}
            >
              {option.label}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
