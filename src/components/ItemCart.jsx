import { useCartContext } from "../context/CartContext";

const ItemCart = ({image, title, price, quantity, amount, id}) => {
    const {delete_product} = useCartContext();

    const delete_product_id = () => {
        delete_product(id);
    }

    return (
        <>
        <div className="col-12 py-3 item-cart-container">
            <div className="row">
                <div className="col-3 col-md-2">
                    <img src={image} alt={title} />
                </div>
                <div className="col-7 col-md-8 mt-3">
                    <div className="row">
                        <div className="col-12 col-lg-4 text-center">
                            <p className="d-none d-lg-block title-cart-items">Nombre</p>
                            <p className="mb-0">{title}</p>
                        </div>
                        <div className="col-12 col-lg-4 text-center">
                            <p className="d-none d-lg-block title-cart-items">Precio</p>
                            <p className="mb-0"><span className="d-inline-block d-lg-none">Precio:</span> ${price} ARS <span style={{fontSize: '12px'}}>x{quantity}</span></p>
                        </div>
                        <div className="col-12 col-lg-4 text-center">
                            <p className="d-none d-lg-block title-cart-items">Monto total</p>
                            <p className="mb-0"><span className="d-inline-block d-lg-none">Total:</span> ${amount} ARS</p>
                        </div>
                    </div>
                </div>
                <div className="col-2 mt-3">
                    <input onClick={delete_product_id} type="image" src="assets/trash.png" alt='garbage' className="pt-3 delete-product"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemCart;