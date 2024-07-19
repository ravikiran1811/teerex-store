import React from "react";
import DressCard from "../DressCard";
import styles from "./index.module.css";
import { TextField } from "@mui/material";
interface DressCardProps {
  imageURL: string;
  price: number;
  name: string;
  count: number;
  id: number;
  quantity: number;
  warning: string;
}

interface DressCardsContainerProps {
  data: DressCardProps[];
  handleInc: (id: number) => void;
  handleDec: (id: number) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const DressCardsContainer: React.FC<DressCardsContainerProps> = ({
  data,
  handleDec,
  handleInc,
  handleChange,
}) => {
  return (
    <div className={styles.totalContainer}>
      <TextField
        onChange={handleChange}
        id="standard-basic"
        label="Search"
        variant="standard"
      />
      <div className={styles.container}>
        {data.map((dress, index) => (
          <DressCard
            key={index}
            name={dress.name}
            image={dress.imageURL}
            price={dress.price}
            count={dress.count}
            id={dress.id}
            quantity={dress.quantity}
            handleInc={handleInc}
            handleDec={handleDec}
            warning={dress.warning}
          />
        ))}
      </div>
    </div>
  );
};

export default DressCardsContainer;
