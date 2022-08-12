import { collection, getDocs, getFirestore } from "firebase/firestore";

export const get_all_data = async (setProducts, category) => {
  const db = getFirestore();
  const querie_collection = collection(db, 'products');
  try {
    const docs = await getDocs(querie_collection);
    const products = docs.docs.map(product => ({ id: product.id, ...product.data()}));
    if(category === undefined) {
      setProducts(products);
    } else {
      const products_category = products.filter(game => game.category === category);
      setProducts(products_category);
    };
  } catch (error) {
      console.log(error);
  }
};