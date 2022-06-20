import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    console.log(cart);

    const handleCart = (product) => {
        const in_cart = cart.find(product_cart => product_cart.id === product.id)
        if(in_cart) {
            if(in_cart.quantity > product.stock) {
                alert('No hay mas stock, siga comprando otro producto')
            } else {
                setCart([{...in_cart, quantity: in_cart.quantity + product.quantity, amount: in_cart.amount + product.amount}]);
            }
        } else {
            setCart([...cart, product]);
        };
        
    };


    return (
        <CartContext.Provider value={{
            cart,
            handleCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;