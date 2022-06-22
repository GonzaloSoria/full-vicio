import { useCartContext } from '../context/CartContext';
import ItemCart from "./ItemCart";

const Checkout = () => {
    const {cart, clear_cart} = useCartContext();
    return (
        <>
            <div className="col-12 col-md-8">
                <div className="row">
                    {
                        cart.map((product) => {
                            return (
                                <ItemCart 
                                    key={product.id}
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                    quantity={product.quantity}
                                    amount={product.amount}
                                    id={product.id}
                                />
                            )
                        })
                    }
                </div>
                <button className="añadir-carrito" onClick={clear_cart}>VACIAR CARRITO</button>
            </div>
            <div className='col-12 col-md-4'>

            </div>
        </>
    )
}

export default Checkout;