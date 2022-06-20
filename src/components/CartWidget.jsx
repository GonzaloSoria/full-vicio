import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
    const {cart_widget} = useCartContext();

    return (
        <>
            <div className="bg-cart">
                <a href="#"><img src="assets/cart.png" alt="" /></a>
                <div className="widget d-flex justify-content-center align-items-center">{cart_widget}</div>
            </div>
        </>
    )
}

export default CartWidget;