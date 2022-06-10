import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../components/ItemDetail';
import { get_data_details } from '../helpers/get_data';

const Details = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      get_data_details(setProduct, id)
    }, []);
    
    return (
        <>
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <ItemDetail 
                  title={product.title} 
                  description={product.description} 
                  image={product.image}
                  price={product.price}
                  stock= {product.stock}
                />
              </div>
            </div>
          </div>
        </>
    )
}

export default Details;