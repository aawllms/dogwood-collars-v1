import React, { useEffect, useState } from "react";
import "./CartPage.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CartPage = () => {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginError, setLoginError] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const handleRemoveItem = (id) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems.splice(itemIndex, 1);
      setCartItems(updatedItems);
    }
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + parseFloat(item.price), 0)
      .toFixed(2);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");

    try {
      const response = await fetch("https://example.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();

      const { token } = data;

      localStorage.setItem("token", token);

      handleClose();

      setLoginEmail("");
      setLoginPassword("");

      console.log("Login successful, JWT stored in localStorage.");
    } catch (error) {
      setLoginError(error.message);
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="cart-page">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleLogin}>
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              id="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
            <br />

            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              id="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <br />

            {loginError && <p style={{ color: "red" }}>{loginError}</p>}

            <button type="submit">Login</button>
          </form>
          <br />

          <label htmlFor="Firstname">First Name:</label>
          <input type="text" />
          <label htmlFor="Lastname">Last Name:</label>
          <input type="text" />
          <label htmlFor="AddressGuest">Address:</label>
          <input type="text" />
          <label htmlFor="EmailGuest">Email:</label>
          <input type="text" />
          <button>Continue as Guest</button>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th className="cart-header-left">Product</th>
                <th className="cart-header-left">Price</th>
                <th className="cart-header-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={`${item.id}-${index}`} className="cart-row">
                  <td className="cart-cell">
                    <img src={item.image} alt="" className="cart-image" />
                    {item.name}
                  </td>
                  <td className="cart-cell">
                    ${parseFloat(item.price).toFixed(2)}
                  </td>
                  <td className="cart-cell">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="cart-remove-button"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h2>Total: ${getTotalPrice()}</h2>
            <button
              onClick={() => handleShow()}
              className="cart-checkout-button"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
