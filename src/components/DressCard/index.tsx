import React from "react";
import styles from './index.module.css'
interface DressCardProps {
  image: string;
  price: number;
}

const DressCard: React.FC<DressCardProps> = ({ image, price }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="Dress" />
      <div>
        <p>Rs: {price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default DressCard;
