export const get_data = async (setState) => {
    const data = await fetch('database/DATABASE.json');
    try {
        const data_parsed = await data.json();
        setState(data_parsed);
        
    } catch (error) {
        console.log(error);
    };
};

export const get_data_id = async (setState, id) => {
    const data = await fetch('database/DATABASE.json');
    try {
        const data_parsed = await data.json();
        setState(data_parsed.find(game => game.id === id));
    } catch (error) {
        console.log(error);
    };
};