import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from "./ItemCart";

const Checkout = () => {
    const {cart, clear_cart, cart_widget, total_amount} = useCartContext();
    return (
        <>
            <div className="col-12 col-md-8 mt-3">
                <h2 className='carrito'>Carrito de compras</h2>
                <img src="assets/download.png" alt="" />
                <div className="row mt-5">
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
                <Link to='/productos' className="continue-buying mx-auto mx-md-0">CONTINUAR COMPRANDO</Link>
                <button className="mt-3 vaciar-carrito mx-auto mx-md-0" onClick={clear_cart}>VACIAR CARRITO</button>
            </div>
            <div className='col-12 col-md-4 mt-5 py-3 py-md-5'>
                <div className='pay-container mt-3 mt-md-5 shadow'>
                    <h2>RESUMEN DE COMPRA</h2>
                    <p>Tienes {cart_widget} {cart_widget === 1 ? 'producto' : 'productos'}</p>
                    <h3>TOTAL</h3>
                    <hr />
                    <p className='total mb-0'>${total_amount} ARS</p>
                    <button className="mt-5 iniciar-pago">INICIAR PAGO</button>
                </div>
            </div>
        </>
    )
}

export default Checkout;