export const get_data_details = async (setProduct, id) => {
    const data = await fetch('../../database/DATABASE.json');
    const data_parsed = await data.json();
    try {
      const data_found = data_parsed.find(game => game.id === id);
      setProduct(data_found);
    } catch (error) {
      console.log(error);
    }
}