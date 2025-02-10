import React, { useState, useEffect } from "react";
import CardComponent from "../components/Card/card.jsx";
<<<<<<< HEAD
// // import multiColorImage from "../assets/multi-color.png";
// // import pink from "../assets/pink.png";
// // import black from "../assets/black.png";
// // import brown from "../assets/brown.png";
// // import darkBrown from "../assets/dark-brown.png";
// // import antique from "../assets/antique.png";
// // // import blackOrange from "../assets/black-orange.png";
// // import green from "../assets/green.png";
// // import teal from "../assets/teal.png";
// // import darkBlue from "../assets/dark-blue.png";
=======
>>>>>>> main
import backgroundImg from "../assets/img06.png";

const Product = () => {
  const [collars, setCollars] = useState([]);
<<<<<<< HEAD
  //   // const collars = [
  //   //   {
  //   //     id: 1,
  //   //     name: "Multicolored",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: multiColorImage,
  //   //   },
  //   //   {
  //   //     id: 2,
  //   //     name: "Pink",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: pink,
  //   //   },
  //   //   {
  //   //     id: 3,
  //   //     name: "Dark Blue",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: darkBlue,
  //   //   },
  //   //   {
  //   //     id: 4,
  //   //     name: "Black",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: black,
  //   //   },
  //   //   {
  //   //     id: 5,
  //   //     name: "Brown",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: brown,
  //   //   },
  //   //   {
  //   //     id: 6,
  //   //     name: "Dark Brown",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: darkBrown,
  //   //   },
  //   //   {
  //   //     id: 7,
  //   //     name: "Gray",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: antique,
  //   //   },
  //   //   {
  //   //     id: 1,
  //   //     name: "Green",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: green,
  //   //   },
  //   //   {
  //   //     id: 1,
  //   //     name: "Teal",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: teal,
  //   //   },
  //   //   {
  //   //     id: 1,
  //   //     name: "Dark Blue",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: darkBlue,
  //   //   },
  //   // ];
=======
  const [cartMessage, setCartMessage] = useState("");

  //   //   const [combinedCollars, setCombinedCollars] = useState([]);

  //   //   // const collars = [
  //   //   //   {
  //   //   //     id: 1,
  //   //   //     name: "Multicolored",
  //   //   //     sizes: "X-small, small, medium, large",
  //   //   //     price: "$24-$48",
  //   //   //     image: multiColorImage,
  //   //   //   },
  //   //   //   {
  //   //   //     id: 2,
  //   //   //     name: "Pink",
  //   //   //     sizes: "X-small, small, medium, large",
  //   //   //     price: "$24-$48",
  //   //   //     image: pink,
  //   //   //   },
  //   //   //   {
  //   //   //     id: 3,
  //   //   //     name: "Dark Blue",
  //   //   //     sizes: "X-small, small, medium, large",
  //   //   //     price: "$24-$48",
  //   //   //     image: darkBlue,
  //   //   //   },
  //   //   //   {
  //   //   //     id: 4,
  //   //   //     name: "Black",
  //   //   //     sizes: "X-small, small, medium, large",
  //   //   //     price: "$24-$48",
  //   //   //     image: black,
  //   //   //   },
  //   //   //   {
  //   //   //     id: 5,
  //   //   //     name: "Brown",
  //   //   //     sizes: "X-small, small, medium, large",
  //   //   //     price: "$24-$48",
  //   //   //     image: brown,
  //   //   //   },
  //   //   //   {
  //   //   //     id: 6,
  //   //   //     name: "Dark Brown",
  //   //   //     sizes: "X-small, small, medium, large",
  //   //   //     price: "$24-$48",
  //   //   //     image: darkBrown,
  //   //   //   },
  //   //   //   {
  //   //   //     id: 7,
  //   //   //     name: "Gray",
  //   //   //     sizes: "X-small, small, medium, large",
  //   //   //     price: "$24-$48",
  //   //   //     image: antique,
  //   //   //   },
  //   //   //   {
  //   //   //     id: 1,
  //   //   //     name: "Green",
  //   //   //     sizes: "X-small, small, medium, large",
  //   //   //     price: "$24-$48",
  //   //   //     image: green,
  //   //   //   },
  //   //   //   {
  //   //   //     id: 1,
  //   //   //     name: "Teal",
  //   //   //     sizes: "X-small, small, medium, large",
  //   //   //     price: "$24-$48",
  //   //   //     image: teal,
  //   //   //   },
  //   //   //   {
  //   //   //     id: 1,
  //   //   //     name: "Dark Blue",
  //   //   //     sizes: "X-small, small, medium, large",
  //   //   //     price: "$24-$48",
  //   //   //     image: darkBlue,
  //   //   //   },
  //   //   // ];
>>>>>>> main

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      const allSmall = data.filter((product) => product.size === "Small");
      setCollars(allSmall);
    }
    getProducts();
  }, []);

<<<<<<< HEAD
=======
  const handleAddToCart = (collarName) => {
    setCartMessage(`${collarName} has been added to your cart!`);

    setTimeout(() => {
      setCartMessage("");
    }, 3000);
  };

>>>>>>> main
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        textAlign: "center",
        padding: "50px 0",
      }}
    >
      <h1 style={{ marginBottom: "1.5rem", fontSize: "2rem", color: "#333" }}>
        Products
      </h1>

      {cartMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#28a745",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            fontSize: "1rem",
            zIndex: "9999",
          }}
        >
          {cartMessage}
        </div>
      )}

      <div
        style={{
<<<<<<< HEAD
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "calc(100vh - 150px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "50px 0",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#803809" }}>Product</h1>
        <div
          className="d-flex justify-content-center flex-wrap"
          style={{ gap: "20px" }}
        >
          {collars.map((collar) => (
            <CardComponent key={collar.id} collar={collar} />
          ))}
        </div>
=======
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px",
          boxSizing: "border-box",
        }}
      >
        {collars.map((collar) => (
          <div
            key={collar.id}
            style={{
              flex: "0 0 calc(33.333% - 1rem)",
              boxSizing: "border-box",
              minWidth: "250px",
            }}
          >
            <CardComponent collar={collar} onAddToCart={handleAddToCart} />
          </div>
        ))}
>>>>>>> main
      </div>
    </div>
  );
};

export default Product;
