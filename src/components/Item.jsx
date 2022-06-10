import { Link } from 'react-router-dom';

const Item = ({title, image, price, id}) => {
    const choose_item = new Audio();
    choose_item.src = 'assets/sounds/choose_item.ogg';

    return (
        <>
            <Link onClick={() => choose_item.play()} to={`/detalle/${id}`} className="col-6 col-md-2 my-3 item">
                <img src={image} alt={title} className="img-fluid"/>
                <h2 className="mt-2">{title}</h2>
                <p>ARS ${price}</p>
            </Link>
        </>
    );
};

export default Item;