import React, { useState } from "react";
import styles from "./index.module.css";
interface DressCardProps {
  image: string;
  price: number;
  name: string;
  count: number;
  id: number;
  quantity: number;
  handleInc: (id: number) => void;
  handleDec: (id: number) => void;
  warning: string;
}

const DressCard: React.FC<DressCardProps> = ({
  image,
  price,
  name,
  count,
  id,
  handleInc,
  handleDec,
  warning,
}) => {
  return (
    <div className={styles.container}>
      {warning.length > 0 && <p className={styles.warning}>{warning}</p>}

      <img className={styles.image} src={image} alt="Dress" />
      <p className={styles.name}>{name}</p>
      <div className={styles.lowercontainer}>
        <p>Rs: {price}</p>
        <div>
          <button onClick={() => handleInc(id)} className={styles.button}>
            +
          </button>
          <span>{count}</span>
          <button onClick={() => handleDec(id)} className={styles.button}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default DressCard;
