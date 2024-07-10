import React from "react";
import DressCard from "../DressCard";
interface DressCardProps {
  imageURL: string;
  price: number;
}
interface DressCardsContainerProps {
  data: DressCardProps[];
}
const DressCardsContainer: React.FC<DressCardsContainerProps> = ({ data }) => {
  return (
    <div>
      {data.map((dress, index) => (
        <DressCard key={index} image={dress.imageURL} price={dress.price} />
      ))}
    </div>
  );
};

export default DressCardsContainer;
