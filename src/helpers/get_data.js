export const get_data = async () => {
    await fetch('database/DATABASE.json')
    .then((resp) => resp.json())
};
