import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import ContinueBuying from "./ContinueBuying";
import GoToCart from "./GoToCart";
import ItemCount from "./ItemCount";

const ItemDetail = ({title, description, price, image, stock, product}) => {
    const {handleCart} = useCartContext();
    const [bought, setBought] = useState(false)

    const add_to_cart = (count) => {
        handleCart({...product, quantity: count, amount: price * count});
        setBought(true);
    };

    return (
        <>
            <div className="col-12 col-md-6 text-center mt-neg-50 px-4">
                <img src={image} alt={title} className="img-fluid"/> 
            </div>
            <div className="col-12 col-md-6 my-5 pt-2 game-detail-container">
                <h2>{title}</h2>
                <img src="/assets/download.png" alt="" className="img-fluid mb-4"/>
                <p>{description}</p>
                <p className="price">${price} ARS</p>
                <p>Stock: {stock}</p>
                {
                    bought === false ?
                        <ItemCount 
                            add_to_cart={add_to_cart}
                            stock={stock}
                        />
                        :
                        <>
                            <ContinueBuying />
                            <GoToCart />
                        </>
                }
            </div>            
        </>
    );
};

export default ItemDetail;