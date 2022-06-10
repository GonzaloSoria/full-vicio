export const get_popular_data = async (setPopularGames) => {
    const data = await fetch('../../database/DATABASE.json');
    try {
      const data_parsed = await data.json();
      const popular_game = data_parsed.filter(game => game.popular === true);
      setPopularGames(popular_game);
    } catch (error) {
      console.log(error);
    }
}