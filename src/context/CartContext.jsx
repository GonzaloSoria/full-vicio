import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{
            cart,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;