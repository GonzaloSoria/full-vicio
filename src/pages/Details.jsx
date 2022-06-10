import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../components/ItemDetail';
import { get_data } from '../helpers/get_data';

const Details = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    console.log(id);
    console.log(product);

    useEffect(() => {
      get_data().then(resp => setProduct(resp))
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