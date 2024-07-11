import React from "react";
import AddToCartCard from "../AddToCartCard";
interface AddToCartProps {
  data: any;
  handleDelete: (id: number) => void;
  totalAmount: number;
}
const AddToCart: React.FC<AddToCartProps> = ({
  data,
  handleDelete,
  totalAmount,
}) => {
  return (
    <div>
      {data.map((item: any) => (
        <AddToCartCard
          key={item.id}
          image={item.imageURL}
          productName={item.name}
          price={item.price}
          quantity={item.count}
          totalAmount={totalAmount}
          id={item.id}
          handleDelete={handleDelete}
        />
      ))}
      <p>Total Amount : {totalAmount}</p>
    </div>
  );
};

export default AddToCart;
