import React from "react";
import styles from "./index.module.css";
import basket from "../../assets/basket-icon.jpg";
interface HeaderProps {
  count: number;
  view: string;
  setView: (view: string) => void;
}
const Header: React.FC<HeaderProps> = ({ count, view, setView }) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>TeeRex Store</p>
      <div className={styles.basketContainer}>
        <p
          onClick={() => {
            setView("products");
          }}
          className={view === "products" ? styles.products : styles.name}
        >
          Products
        </p>
        <img
          onClick={() => {
            setView("cart");
          }}
          className={view==='cart' ? styles.cart : styles.basket}
          src={basket}
          alt="basket"
        />
        <p className={styles.count}>{count}</p>
      </div>
    </div>
  );
};

export default Header;
