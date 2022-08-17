import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

export const get_popular_data = async (setPopularGames) => {
    try {
      const db = getFirestore();
      const query_collection = collection(db, 'products');
      const query_collection_filter = query(query_collection, where('popular', "==", true));
      const docs = await getDocs(query_collection_filter);
      const popular_game = docs.docs.map(product => ({ id: product.id, ...product.data()}));
      setPopularGames(popular_game);
    } catch (error) {
      console.log(error);
    };
};