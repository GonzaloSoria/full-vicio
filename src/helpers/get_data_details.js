export const get_data_details = async (setProduct, id) => {
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