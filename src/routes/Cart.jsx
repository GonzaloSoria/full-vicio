import { useCartContext } from '../context/CartContext';
import EmptyCart from "../components/EmptyCart";
import Checkout from '../components/Checkout';

const Cart = () => {
    const {cart} = useCartContext();

    return (
        <>
            <div className="container-fluid pt-5 mt-5">
                <div className="container">
                    <div className="row">
                        {
                            cart.length === 0 ?
                                <EmptyCart />
                                :
                                <Checkout />
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;