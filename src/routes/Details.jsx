import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../components/ItemDetail';
import { get_data_details } from '../helpers/get_data_details';

const Details = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const bg_styles = {
      backgroundImage: `url(${product.background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }

    useEffect(() => {
      get_data_details(setProduct, id);
    }, []);
    
    return (
        <>
          <div className="container-fluid px-0">
            <div style={bg_styles} className="pt-250"></div>
            <div className="container">
              <div className="row">
                <ItemDetail 
                  title={product.title} 
                  description={product.description} 
                  image={product.image}
                  price={product.price}
                  stock={product.stock}
                  product={product}
                />
              </div>
            </div>
          </div>
        </>
    )
}

export default Details;