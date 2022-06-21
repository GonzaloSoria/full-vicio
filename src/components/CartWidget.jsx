import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
    const {cart_widget} = useCartContext();

    return (
        <>
            <div className="bg-cart">
                <Link to='/carrito'><img src="assets/cart.png" alt="" /></Link>
                <div className="widget d-flex justify-content-center align-items-center">{cart_widget}</div>
            </div>
        </>
    )
}

export default CartWidget;