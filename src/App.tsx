import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import DressCardsContainer from "./components/DressCardsContainer";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import AddToCart from "./components/AddToCart";

function App() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json "
        );
        const dataWithCount = response.data.map((item: any, index: number) => ({
          ...item,
          count: 0,
        }));
        setData(dataWithCount);
        setFilteredData(dataWithCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const [priceInd, setPriceInd] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [addToCartData, setAddToCartData] = useState<any>([]);
  const [view, setView] = useState<string>("products");
  const handleCheckboxChange = (name: string) => {
    setCheckedItems((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const priceFilter = (price: number) => {
    console.log(price);
    if (checkedItems.includes("0-250")) {
      return price >= 0 && price <= 250;
    }
    if (checkedItems.includes("251-450")) {
      return price >= 251 && price <= 400;
    }
    if (checkedItems.includes("450+")) {
      return price >= 451;
    }
    return false;
  };
  const handleInc = (id: number) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setData(updatedData);
  };
  const handleDec = (id: number) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    );
    setData(updatedData);
  };
  useEffect(() => {
    const updatedData = data.filter((item) => item.count > 0);
    setAddToCartData(updatedData);
    console.log(updatedData);
    console.log("Total count:", updatedData.length);
    setCount(updatedData.length);
  }, [data]);
  useEffect(() => {
    if (checkedItems.length > 0) {
      const updatedData = data.filter(
        (item) =>
          checkedItems.includes(item.color) ||
          priceFilter(item.price) ||
          checkedItems.includes(item.gender) ||
          checkedItems.includes(item.type)
      );
      setFilteredData(updatedData);
    } else {
      setFilteredData(data);
    }
  }, [checkedItems, data]);
  const handleDelete = (id: number) => {
    const countData = data.map((item) =>
      item.id === id ? { ...item, count: 0 } : item
    );
    setData(countData);
    const updatedData = addToCartData.filter((item: any) => item.id !== id);
    setAddToCartData(updatedData);
  };
  useEffect(() => {
    const total = addToCartData.reduce((acc: number, item: any) => {
      return acc + item.count * item.price;
    }, 0);
    setTotalPrice(total);
  }, [addToCartData]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const updatedData = data.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(updatedData);
  };
  return (
    <div className="App">
      <Header count={count} view={view} setView={setView} />
      {view === "products" && (
        <div className="container">
          <SideBar
            checkedItems={checkedItems}
            onCheckboxChange={handleCheckboxChange}
          />
          <DressCardsContainer
            handleInc={handleInc}
            handleDec={handleDec}
            data={filteredData}
            handleChange={handleChange}
          />
        </div>
      )}
      {view === "cart" && (
        <AddToCart
          data={addToCartData}
          totalAmount={totalPrice}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default App;
