import { doc, getDoc, getFirestore } from "firebase/firestore";

export const get_data_details = async (setProduct, id) => {
  try {
    const db = getFirestore();
    const query_item = doc(db, 'products', id);
    await getDoc(query_item)
    .then(resp => setProduct({ id: resp.id, ...resp.data()}))
  } catch (error) {
    console.log(error);
  }
};

