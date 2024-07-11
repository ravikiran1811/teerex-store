import React, { useEffect } from "react";
import Chip from "../Chip";
import styles from "./index.module.css";
interface SideBarProps {
  checkedItems: string[];
  onCheckboxChange: (name: string) => void;
}
const SideBar: React.FC<SideBarProps> = ({
  checkedItems,
  onCheckboxChange,
}) => {
  const colors = ["Red", "Green", "Blue"];
  const gender = ["Men", "Women"];
  const price = [
    {
      label: "0-250",
      value: [0, 250],
    },
    {
      label: "251-450",
      value: [251, 450],
    },
    {
      label: "450+",
      value: [450, 1000000],
    },
  ];
  const type = ["Polo", "Hoodie", "Basic"];

  return (
    <div className={styles.container}>
      <div className={styles.colorsContainer}>
        <p className={styles.name}>Color</p>
        <div className={styles.innerContainer}>
          {colors.map((color, index) => (
            <Chip
              handleCheckboxChange={() => onCheckboxChange(color)}
              isChecked={checkedItems.includes(color)}
              key={index}
              name={color}
            />
          ))}
        </div>
      </div>
      <div className={styles.genderContainer}>
        <p className={styles.name}>Gender</p>
        <div className={styles.innerContainer}>
          {gender.map((gender, index) => (
            <Chip
              handleCheckboxChange={() => onCheckboxChange(gender)}
              isChecked={checkedItems.includes(gender)}
              key={index}
              name={gender}
            />
          ))}
        </div>
      </div>
      <div className={styles.priceContainer}>
        <p className={styles.name}>Price</p>
        <div className={styles.innerContainer}>
          {price.map((price, index) => (
            <Chip
              handleCheckboxChange={() => onCheckboxChange(price.label)}
              isChecked={checkedItems.includes(price.label)}
              key={index}
              name={price.label}
            />
          ))}
        </div>
      </div>
      <div className={styles.typeContainer}>
        <p className={styles.name}>Type</p>
        <div className={styles.innerContainer}>
          {type.map((type, index) => (
            <Chip
              handleCheckboxChange={() => onCheckboxChange(type)}
              isChecked={checkedItems.includes(type)}
              key={index}
              name={type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
