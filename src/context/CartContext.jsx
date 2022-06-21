import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    console.log(cart);

    const handle_cart = (product) => {
        const in_cart = cart.find(product_cart => product_cart.id === product.id);
        if(in_cart) {
            if((in_cart.quantity + product.quantity) > product.stock) {
                alert('No hay mas stock, siga comprando otro producto')
            } else {
                const cart_products = cart.filter(cart_product => cart_product !== in_cart)
                setCart([...cart_products, {...in_cart, quantity: in_cart.quantity + product.quantity, amount: in_cart.amount + product.amount}]);
            }
        } else {
            setCart([...cart, product]);
        };
    };

    const delete_product = (product) => {
        const in_cart = cart.find(product_cart => product_cart.id === product.id);
        if(in_cart) {
            const cart_products = cart.filter(cart_product => cart_product !== in_cart)
            return setCart([...cart_products]);
        };
    };

    const cart_widget = cart.reduce((quantity, products) => {
        return quantity = quantity + products.quantity;
    }, 0);

    return (
        <CartContext.Provider value={{
            cart,
            handle_cart,
            delete_product,
            cart_widget
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;