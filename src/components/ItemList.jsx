import Item from "./Item";

const ItemList = () => {
    return (
        <>
            <h2 className="categorias mb-5">Todos los juegos</h2>
            <div className="row">
                <Item />
            </div>
        </>
    );
};

export default ItemList;