import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../components/ItemDetail';
//import { get_data } from '../helpers/get_data';

const Details = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
      const get_data = async () => {
        const data = await fetch('../../database/DATABASE.json');
        try {
          const data_parsed = await data.json();
          const data_found = data_parsed.find(game => {
            return game.id === id;
          });
          setProduct(data_found);
        } catch (error) {
          console.log(error);
        }
       
      }
      get_data();
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