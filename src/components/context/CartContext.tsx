// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (item) => setCart((prev) => [...prev, item]);

//     const removeFromCart = (name) => {
//         setCart((prev) => prev.filter((cartItem) => cartItem.name !== name));
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// }

