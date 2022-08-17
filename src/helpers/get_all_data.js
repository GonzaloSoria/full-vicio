import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const get_all_data = async (setProducts, category) => {
  try {
    const db = getFirestore();
    const query_collection = collection(db, 'products');
    const docs = await getDocs(query_collection);
    const products = docs.docs.map(product => ({ id: product.id, ...product.data()}));
    if(category === undefined) {
      setProducts(products);
    } else {
      const query_collection_filter = query(query_collection, where('category', "==", category));
      const docs = await getDocs(query_collection_filter);
      const products = docs.docs.map(product => ({ id: product.id, ...product.data()}));
      setProducts(products);
    };
  } catch (error) {
      console.log(error);
  };
};