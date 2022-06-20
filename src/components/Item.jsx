import { Link } from 'react-router-dom';

const Item = ({title, image, price, id}) => {
    return (
        <>
            <Link to={`/detalle/${id}`} className="col-6 col-md-2 my-3 item">
                <img src={image} alt={title} className="img-fluid"/>
                <h2 className="mt-2">{title}</h2>
                <p>ARS ${price}</p>
            </Link>
        </>
    );
};

export default Item;