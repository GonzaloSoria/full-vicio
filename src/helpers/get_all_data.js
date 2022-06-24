export const get_all_data = async (setProducts, category) => {
    const data = await fetch('../../database/DATABASE.json');
    const data_parsed = await data.json();
    try {
      if(category === undefined) {
        setProducts(data_parsed);
      } else {
        const data_category = data_parsed.filter(game => game.category === category);
        setProducts(data_category);
      };
    } catch (error) {
      console.log(error);
    };
};