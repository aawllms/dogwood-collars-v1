import { useState } from "react";
<<<<<<< HEAD

function CardComponent({ collar }) {
=======
const itemPrices = {
  XS: 24,
  S: 28,
  M: 38,
  L: 48,
};

function CardComponent({ collar, onAddToCart }) {
>>>>>>> main
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      console.log(`Added ${collar.name} in size ${selectedSize} to cart`);
      const item = {
        name: collar.name,
<<<<<<< HEAD
<<<<<<< HEAD
        size: collar.size,
        price: collar.price,
=======
        size: selectedSize, 
=======
        size: selectedSize,
>>>>>>> main
        price: price,
>>>>>>> main
        image: collar.image,
      };

      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));

      onAddToCart(collar.name);

      // Clear the size selection after adding to the cart
      setSelectedSize("");
    } else {
      alert("Please select a size before adding to cart");
    }
  };

  return (
    <div className="card m-3" style={{ width: "18rem", display: "flex", flexDirection: "column" }}>
      <img
        src={collar.image}
        className="card-img-top"
        alt="..."
        style={{ width: "100%", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
      />
      <div className="card-body" style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <h3>{collar.name}</h3>
        <p className="card-text">$24-$48</p>
        <select
          value={selectedSize}
          onChange={handleSizeChange}
          className="size-selector"
          style={{ marginBottom: "10px" }}
        >
          <option value="">Select size</option>
          <option value="XS">X-Small $24</option>
          <option value="S">Small $28</option>
          <option value="M">Medium $38</option>
          <option value="L">Large $48</option>
        </select>
        <br></br>

<<<<<<< HEAD
        <button onClick={handleAddToCart} className="btn btn-primary">Add to cart</button>
=======
        {/* Add to cart button */}
        <button className="btn btn-info" onClick={handleAddToCart}>
          Add to cart
        </button>
>>>>>>> main
      </div>
    </div>
  );
}

export default CardComponent;
