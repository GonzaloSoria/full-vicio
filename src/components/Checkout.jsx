import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from "./ItemCart";

const Checkout = () => {
    const {cart, clear_cart, cart_widget, total_amount} = useCartContext();
    return (
        <>
            <div className="col-12 col-md-8">
                <div className="row mb-5">
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
                <Link to='/productos' className="añadir-carrito">CONTINUAR COMPRANDO</Link>
                <button className="mt-3 añadir-carrito" onClick={clear_cart}>VACIAR CARRITO</button>
            </div>
            <div className='col-12 col-md-4'>
                <div className='pay-container shadow'>
                    <h2>RESUMEN DE COMPRA</h2>
                    <p>Tienes {cart_widget} {cart_widget === 1 ? 'producto' : 'productos'}</p>
                    <h3>TOTAL</h3>
                    <p className='total'>${total_amount} ARS</p>
                    <button className="mt-3 añadir-carrito" onClick={clear_cart}>INICIAR PAGO</button>
                </div>
            </div>
        </>
    )
}

export default Checkout;