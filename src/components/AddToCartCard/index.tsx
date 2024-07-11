import React from "react";
import styles from "./index.module.css";
interface AddToCartCardProps {
  id: number;
  image: string;
  productName: string;
  price: number;
  quantity: number;
  totalAmount: number;
  handleDelete: (id: number) => void;
}

const AddToCartCard: React.FC<AddToCartCardProps> = ({
  id,
  image,
  productName,
  price,
  quantity,
  handleDelete,
}) => {
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="Product" />
        <div className={styles.productDetails}>
          <p>{productName}</p>
          <p>Rs: {price}</p>
        </div>
        <p>Quantity: {quantity}</p>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
   
    </div>
  );
};

export default AddToCartCard;
