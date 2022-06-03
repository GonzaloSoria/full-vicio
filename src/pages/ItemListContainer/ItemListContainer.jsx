import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";

const ItemListcontainer = () => {
    return (
        <>
            <div className="container py-5">
                <ItemList />
                <ItemCount stock={5}/>
            </div>
        </>
    )
}

export default ItemListcontainer;