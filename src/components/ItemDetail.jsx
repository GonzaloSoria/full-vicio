import { useState } from "react";
import ContinueBuying from "./ContinueBuying";
import GoToCart from "./GoToCart";
import ItemCount from "./ItemCount";

const ItemDetail = ({title, description, price, image, stock}) => {
    const [cart, setCart] = useState(0);
    const [count, setCount] = useState(1);

    const add_cart = new Audio();
    add_cart.src = 'assets/sounds/add_cart.wav';

    const handleCart = () => {
        if((count + cart) > stock) {
            alert('No hay mas stock para agregar')
        } else {
            setCart(cart + count);
            if(count !== 0) {
                add_cart.play()
            };
        };
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
                {cart === 0 ?
                    <ItemCount 
                        handleCart={handleCart}
                        count={count}
                        setCount={setCount}
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