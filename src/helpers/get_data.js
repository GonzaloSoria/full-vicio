export const get_data = async (setState) => {
    const data = await fetch('database/DATABASE.json');
    try {
        const data_parsed = await data.json();     
        setState(data_parsed)
    } catch (error) {
        console.log(error);
    };
};

export const get_data_details = async (setState, id) => {
    const data = await fetch('database/DATABASE.json');
    try {
        const data_parsed = await data.json()
        const data_find = data_parsed.find(game => game.id === id)
        setState(data_find);
    } catch (error) {
        console.log(error);
    };
};