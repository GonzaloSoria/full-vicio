import { Link } from 'react-router-dom'

const FavWidget = () => {
    return (
        <>
            <div className="bg-fav">
                <Link to='/favoritos'><img src="assets/favorito.png" alt="" /></Link>
            </div>
        </>
    )
}

export default FavWidget;