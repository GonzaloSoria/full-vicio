import { Link } from 'react-router-dom'

const UserWidget = () => {
    return (
        <>
            <div className="bg-fav">
                <Link to='/favoritos'><img src="assets/user.png" alt="" /></Link>
            </div>
        </>
    )
}

export default UserWidget;