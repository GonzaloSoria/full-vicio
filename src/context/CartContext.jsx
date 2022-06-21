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

    const delete_product = (product_id) => {
        const in_cart = cart.find(product_cart => product_cart.id === product_id);
        if(in_cart) {
            const cart_products = cart.filter(cart_product => cart_product !== in_cart)
            setCart([...cart_products]);
        };
    };

    const clear_cart = () => {
        setCart([]);
    };

    const cart_widget = cart.reduce((quantity, products) => {
        return quantity = quantity + products.quantity;
    }, 0);

    const total_amount = cart.reduce((amount, products) => {
        return amount = amount + products.amount;
    }, 0);

    return (
        <CartContext.Provider value={{
            cart,
            handle_cart,
            delete_product,
            clear_cart,
            total_amount,
            cart_widget
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;