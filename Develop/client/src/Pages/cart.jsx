<<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import "./CartPage.css";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// const CartPage = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [cartItems, setCartItems] = useState([]);

//   // Load cart items from localStorage when component mounts
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   // Update localStorage whenever cartItems change
//   useEffect(() => {
//     if (cartItems.length > 0) {
//       localStorage.setItem("cart", JSON.stringify(cartItems));
//     }
//   }, [cartItems]);

//   // const handleQuantityChange = (id, newQuantity) => {
//   //   if (newQuantity < 1) return;
//   //   const updatedItems = cartItems.map((item) =>
//   //     item.id === id ? { ...item, quantity: newQuantity } : item
//   //   );
//   //   setCartItems(updatedItems);
//   // };

//   const handleRemoveItem = (id) => {
//     // Find the index of the first item with the given id
//     const itemIndex = cartItems.findIndex((item) => item.id === id);
//     console.log(id);
//     // console.log(item);

//     // If the item exists, create a new array without that specific item
//     if (itemIndex !== -1) {
//       const updatedItems = [...cartItems]; // Copy the array
//       updatedItems.splice(itemIndex, 1); // Remove the item at the found index
//       setCartItems(updatedItems); // Update the state
//     }
//   };

//   const getTotalPrice = () => {
//     return cartItems
//       .reduce((total, item) => total + parseFloat(item.price), 0)
//       .toFixed(2);
//   };

//   return (
//     <div className="cart-page">
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>User Information</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form>
//             <label htmlFor="Email">Email:</label>
//             <input type="text" />
//             <br></br>
//             <label htmlFor="Password">Password:</label>
//             <input type="text" />
//             <br></br>
//             <button>Login</button>
//             <br></br>

//             <a>
//               <label htmlFor="Firstname">First Name:</label>
//               <input type="text" />
//               <label htmlFor="Lastname">Last Name:</label>
//               <input type="text" />
//               <label htmlFor="Email">Email:</label>
//               <input type="text" />
//               <button>Continue as Guest</button>
//             </a>
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <table className="cart-table">
//             <thead>
//               <tr>
//                 <th className="cart-header-left">Product</th>
//                 <th className="cart-header-left">Price</th>
//                 {/* <th className="cart-header-left">Quantity</th> */}
//                 {/* <th className="cart-header-left">Subtotal</th> */}
//                 <th className="cart-header-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item, index) => (
//                 <tr key={`${item.id}-${index}`} className="cart-row">
//                   <td className="cart-cell">
//                     <img src={item.image} alt="" className="cart-image" />
//                     {item.name}
//                   </td>
//                   <td className="cart-cell">
//                     ${parseFloat(item.price).toFixed(2)}
//                   </td>
//                   <td className="cart-cell">
//                     <button
//                       onClick={() => handleRemoveItem(item.id)}
//                       className="cart-remove-button"
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="cart-summary">
//             <h2>Total: ${getTotalPrice()}</h2>
//             <button
//               onClick={() => handleShow()}
//               className="cart-checkout-button"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

=======
>>>>>>> main
import React, { useEffect, useState } from "react";
import "./CartPage.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CartPage = () => {
  const [show, setShow] = useState(false);
<<<<<<< HEAD
  const [cartItems, setCartItems] = useState([]);

  // 1. State for login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // State for showing an error or success message (optional)
  const [loginError, setLoginError] = useState("");

  // Show/Hide modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

=======

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cartItems, setCartItems] = useState([]);

>>>>>>> main
  // Load cart items from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Update localStorage whenever cartItems change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

<<<<<<< HEAD
  // Remove item from cart
  const handleRemoveItem = (id) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems.splice(itemIndex, 1);
      setCartItems(updatedItems);
    }
  };

  // Calculate total price
=======
  // const handleQuantityChange = (id, newQuantity) => {
  //   if (newQuantity < 1) return;
  //   const updatedItems = cartItems.map((item) =>
  //     item.id === id ? { ...item, quantity: newQuantity } : item
  //   );
  //   setCartItems(updatedItems);
  // };

  const handleRemoveItem = (id) => {
    // Find the index of the first item with the given id
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    console.log(id);
    // console.log(item);

    // If the item exists, create a new array without that specific item
    if (itemIndex !== -1) {
      const updatedItems = [...cartItems]; // Copy the array
      updatedItems.splice(itemIndex, 1); // Remove the item at the found index
      setCartItems(updatedItems); // Update the state
    }
  };

>>>>>>> main
  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + parseFloat(item.price), 0)
      .toFixed(2);
  };

<<<<<<< HEAD
  // 2. Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(""); // reset any previous error

    try {
      // Send a POST request to your login endpoint
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
        // If the response has a status code other than 2xx, throw an error
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();

      // Destructure token (adjust depending on your API response structure)
      const { token } = data;

      // Store token in localStorage (or sessionStorage) to maintain logged-in state
      localStorage.setItem("token", token);

      // Optionally, you can close the modal and/or redirect after successful login
      handleClose();

      // You might want to clear the login fields
      setLoginEmail("");
      setLoginPassword("");

      console.log("Login successful, JWT stored in localStorage.");
    } catch (error) {
      setLoginError(error.message);
      console.error("Error logging in:", error);
    }
  };

=======
>>>>>>> main
  return (
    <div className="cart-page">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<<<<<<< HEAD
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

            {/* Display any login error message (optional) */}
            {loginError && <p style={{ color: "red" }}>{loginError}</p>}

            <button type="submit">Login</button>
          </form>
          <br />

          {/* Guest Info Section — example from previous answer (optional) */}
          <label htmlFor="Firstname">First Name:</label>
          <input type="text" />
          <label htmlFor="Lastname">Last Name:</label>
          <input type="text" />
          <label htmlFor="EmailGuest">Email:</label>
          <input type="text" />
          <button>Continue as Guest</button>
        </Modal.Body>

=======
          <form>
            <label htmlFor="Email">Email:</label>
            <input type="text" />
            <br></br>
            <label htmlFor="Password">Password:</label>
            <input type="text" />
            <br></br>
            <button>Login</button>
            <br></br>

            <a>
              <label htmlFor="Firstname">First Name:</label>
              <input type="text" />
              <label htmlFor="Lastname">Last Name:</label>
              <input type="text" />
              <label htmlFor="Email">Email:</label>
              <input type="text" />
              <button>Continue as Guest</button>
            </a>
          </form>
        </Modal.Body>
>>>>>>> main
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
<<<<<<< HEAD

=======
>>>>>>> main
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
<<<<<<< HEAD
=======
                {/* <th className="cart-header-left">Quantity</th> */}
                {/* <th className="cart-header-left">Subtotal</th> */}
>>>>>>> main
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
