import React from "react";
import styles from "./index.module.css";
interface ChipProps {
  name: string;
  isChecked: boolean;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Chip: React.FC<ChipProps> = ({
  name,
  isChecked,
  handleCheckboxChange,
}) => {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default Chip;
