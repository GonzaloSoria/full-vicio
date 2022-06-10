import { useState, useEffect } from "react";
import ItemDetail from '../components/ItemDetail';
import { get_data_id } from '../helpers/get_data';

const Details = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
      get_data_id(setProduct, "1");
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